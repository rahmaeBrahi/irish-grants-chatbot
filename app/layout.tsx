import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Irish Grants Eligibility Chatbot',
  description: 'Guidance and eligibility check for Irish SME and startup grants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
