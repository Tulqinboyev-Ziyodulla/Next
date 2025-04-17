import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next",
  description: "Next site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f1f1f1]">
        <header className="w-full px-4 py-5 bg-[#d7dadd] shadow-md z-index-5">
          <nav className="max-w-[1250px] mx-auto flex items-center justify-between">
            <p></p>
            <div className="flex">
              <Link
                href="/"
                className="text-black text-2xl font-bold ml-[590px]"
              >
                Home
              </Link>
            </div>
          </nav>
        </header>
        <main className="w-full mx-auto mt-8">{children}</main>
       
      </body>
    </html>
  );
}
