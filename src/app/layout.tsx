import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "@next/font/local";
import { Header, Footer } from "@/components";
import Head from "next/head";

const sans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  );
}
