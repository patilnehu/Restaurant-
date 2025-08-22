import type React from "react";
import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/auth-context";
import ClientContent from "@/components/client-content";
import { CartProvider } from "./context/card-context";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Feane - Fast Food Restaurant",
  description:
    "Delicious fast food restaurant with tasty burgers, pizza, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <ClientContent>{children}</ClientContent>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
