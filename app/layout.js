import "./globals.css";


export const metadata = {
  title: "Checkout",
  description: "Checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
