import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";

const sans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-plus-jakarta",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
