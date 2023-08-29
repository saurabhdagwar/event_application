import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Application",
  description: "Event Application with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh] relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
