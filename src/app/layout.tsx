import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Luxora - Premium Furniture & Living",
  description: "Crafting Timeless Living Spaces. Luxury furniture designed for modern homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <CartProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
