import { NextResponse } from 'next/server';
import { KNOWLEDGE_BASE } from '@/lib/knowledge-base';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key is missing on the server. Please configure OPENROUTER_API_KEY.' },
        { status: 500 }
      );
    }

    const model = process.env.OPENROUTER_MODEL || 'google/gemini-2.5-flash';

    const systemPrompt = `You are the Irish Grants Eligibility Chatbot, an expert AI assistant that guides Irish SMEs, startups, and non-profits through grant eligibility checks.
Your responses must be based ONLY on the provided Knowledge Base.
If the information is not in the Knowledge Base, politely say you don't have that information.
Never promise approval — the chatbot gives an eligibility indication only. Final decisions rest with the LEO / Enterprise Ireland / Google.
Never tell a user to spend money before grant approval — retrospective costs are almost never eligible.
Every disqualification must end with a redirect to an alternative support.
All amounts exclude VAT unless stated otherwise.

Here is the official Knowledge Base:
<KNOWLEDGE_BASE>
${KNOWLEDGE_BASE}
</KNOWLEDGE_BASE>

Always reply in English with a distinct, warm, and professional Irish tone. Feel free to use friendly Irish colloquialisms naturally and professionally where appropriate (e.g., "How's the form?", "Grand", "Cheers", "No worries", "Splendid", "Fair play to you", "That should be grand"). Make sure your tone is helpful, encouraging, and highly professional. Use markdown formatting (bolding, lists, tables) to make your answers clear and readable.`;

    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://github.com/rahmaeBrahi/cicd',
        'X-Title': 'Irish Grants Eligibility Chatbot',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.3,
      }),
    });

    if (!openRouterResponse.ok) {
      const errorText = await openRouterResponse.text();
      console.error('OpenRouter error response:', errorText);
      return NextResponse.json(
        { error: `OpenRouter API error: ${openRouterResponse.statusText}` },
        { status: openRouterResponse.status }
      );
    }

    const data = await openRouterResponse.json();
    const reply = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ message: reply });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
