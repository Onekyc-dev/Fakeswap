import "./globals.css";

export const metadata = {
  title: "FakeSwap — Test Token Exchange",
  description: "A throwaway dApp used to test OneKYC integration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
