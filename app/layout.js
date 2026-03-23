import './globals.css';

export const metadata = {
  title: 'StrengthInMen',
  description: 'Strength for men rebuilding their lives with structure, motivation, and real support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
