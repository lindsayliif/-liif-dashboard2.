import "./globals.css";

export const metadata = {
  title: "LIIF Dashboard",
  description: "Lindsay Investment Intelligence Framework"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
