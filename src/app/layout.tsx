import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jambula Venkata Jaya Prakash Reddy | Resume",
  description: "Resume of Jambula Venkata Jaya Prakash Reddy — Computer Science Engineer",
  openGraph: {
    title: "Jambula Venkata Jaya Prakash Reddy | Resume",
    description: "Resume of Jambula Venkata Jaya Prakash Reddy — Computer Science Engineer",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen text-foreground">
          <header className="sticky top-0 z-10 glass border-b border-black/[.08] dark:border-white/[.145]">
            <div className="mx-auto max-w-4xl px-6 py-5 flex flex-col gap-1">
              <h1 className="text-2xl font-semibold tracking-tight">Jambula Venkata Jaya Prakash Reddy</h1>
              <p className="text-sm text-black/60 dark:text-white/60">
                Computer Science Engineer ·
                <a className="underline underline-offset-4 hover:opacity-80 ml-1" href="mailto:prakashprakash2459@gmail.com">prakashprakash2459@gmail.com</a>
                <span className="mx-2">·</span>
                <a className="underline underline-offset-4 hover:opacity-80" href="tel:+919347026387">+91 93470 26387</a>
                <span className="mx-2">·</span>
                <a className="underline underline-offset-4 hover:opacity-80" href="https://www.jayaprakash.space" target="_blank" rel="noreferrer noopener">jayaprakash.space</a>
                <span className="mx-2">·</span>
                <a className="underline underline-offset-4 hover:opacity-80" href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener">GitHub</a>
              </p>
            </div>
          </header>
          <main className="mx-auto max-w-4xl px-6 py-10">
            {children}
          </main>
          <footer className="border-t border-black/[.08] dark:border-white/[.145]">
            <div className="mx-auto max-w-4xl px-6 py-6 text-xs text-black/60 dark:text-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>© {new Date().getFullYear()} Jambula Venkata Jaya Prakash Reddy. All rights reserved.</span>
              <nav className="flex gap-4">
                <a className="hover:underline underline-offset-4" href="mailto:prakashprakash2459@gmail.com">Email</a>
                <a className="hover:underline underline-offset-4" href="https://www.jayaprakash.space" target="_blank" rel="noreferrer noopener">Website</a>
                <a className="hover:underline underline-offset-4" href="https://github.com/Prakash2459" target="_blank" rel="noreferrer noopener">GitHub</a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
