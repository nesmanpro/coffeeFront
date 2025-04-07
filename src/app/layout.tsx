import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/themeProvider";

const urbanist = Urbanist({
  variable: "--font-urbanis",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Coffee e-commerce App",
  description: "Welcome to my E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen m-[0_auto] w-full`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
