import "./globals.css";

export const metadata = {
  title: "StrengthInMen",
  description: "For men rebuilding their lives.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
