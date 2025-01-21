import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CartProvider } from "./context/CartContext";
import { NotificationsProvider } from "./context/NotificationContext";
import { ToastContainer } from "@/components/ui/Toast";

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
          <NotificationsProvider>
            <Header />
            {children}
            <ToastContainer />
            <Footer />
          </NotificationsProvider>
        </CartProvider>
      </body>
    </html>
  );
}
