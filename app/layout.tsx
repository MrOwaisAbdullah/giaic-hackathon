import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CartProvider } from "./context/CartContext";


export const metadata: Metadata = {
  title: "Comforty Furniture Shop",
  description: "Created By Owais Abdullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <CartProvider>
        <Header />
        {children}
        <Footer />
        </CartProvider>

      </body>
    </html>
  );
}
