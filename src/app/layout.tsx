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
  title: "Jambula Venkata Jaya Prakash Reddy | Resume - Computer Science Engineer & Full Stack Developer",
  description: "Professional resume of Jambula Venkata Jaya Prakash Reddy, Computer Science Engineer specializing in embedded systems, IoT, blockchain technology, machine learning, and full-stack development. Winner of multiple hackathons with expertise in Python, Java, React, and Raspberry Pi development.",
  keywords: [
    "Jambula Venkata Jaya Prakash Reddy",
    "Computer Science Engineer",
    "Full Stack Developer",
    "Embedded Systems",
    "IoT Developer",
    "Blockchain Developer",
    "Machine Learning",
    "Raspberry Pi Developer",
    "Python Developer",
    "React Developer",
    "Resume",
    "Portfolio",
    "Software Engineer",
    "Hyderabad",
    "India"
  ],
  authors: [{ name: "Jambula Venkata Jaya Prakash Reddy" }],
  creator: "Jambula Venkata Jaya Prakash Reddy",
  publisher: "Jambula Venkata Jaya Prakash Reddy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jayaprakash.space",
    title: "Jambula Venkata Jaya Prakash Reddy | Professional Resume & Portfolio",
    description: "Explore the professional journey of Jambula Venkata Jaya Prakash Reddy - Computer Science Engineer, Full Stack Developer, and IoT specialist. Discover innovative projects in blockchain, machine learning, and embedded systems.",
    siteName: "Jambula Venkata Jaya Prakash Reddy - Resume",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Jambula Venkata Jaya Prakash Reddy Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jambula Venkata Jaya Prakash Reddy | Computer Science Engineer",
    description: "Professional resume showcasing expertise in embedded systems, IoT, blockchain, and full-stack development.",
    images: ["/apple-touch-icon.png"],
    creator: "@jayaprakashreddy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Jaya Prakash Resume",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jambula Venkata Jaya Prakash Reddy",
  "jobTitle": "Computer Science Engineer & Full Stack Developer",
  "description": "Computer Science Engineer specializing in embedded systems, IoT, blockchain technology, and full-stack development",
  "url": "https://www.jayaprakash.space",
  "email": "prakashprakash2459@gmail.com",
  "telephone": "+91-93470-26387",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressCountry": "India"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Mahatma Gandhi Institute of Technology"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Neonflake Enterprises OPC Pvt Ltd"
  },
  "knowsAbout": [
    "Computer Science",
    "Embedded Systems",
    "IoT Development",
    "Blockchain Technology",
    "Machine Learning",
    "Full Stack Development",
    "Python Programming",
    "Java Programming",
    "React Development",
    "Raspberry Pi Development"
  ],
  "award": [
    "1st Place - Intra Institution Innovation Competition and Hackathon (MGIT, 2023)",
    "1st Place - Idea Pitching Contest at Idea Incubator (MGIT, 2023)",
    "2nd Place - Smart India Hackathon 2023 (Finals)"
  ],
  "sameAs": [
    "https://github.com/Prakash2459",
    "https://www.jayaprakash.space",
    "https://www.linkedin.com/in/jambula-venkata-jaya-prakash-reddy"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
