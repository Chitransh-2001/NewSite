"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./globals.css";
// import useInactivityLogout from "./../../lib/useInactivityLogout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const scrollUp = document.getElementById("scrollUp");

    const handleScroll = () => {
      if (!scrollUp) return;
      if (window.scrollY > 300) {
        scrollUp.style.display = "block";
      } else {
        scrollUp.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head>
        <title>Best Ruby On Rails Development Company | InfoKoders Technologies</title>
        <link rel="icon" href="/assets/img/favicon_new.png" type="image/png" />
        <meta
          name="description"
          content="InfoKoders Technologies is one of the best Best Ruby On Rails Development Company & the unmatched destination to embrace exceptional technological solutions."
        />
        <meta
          name="keywords"
          content="Ruby On Rails Development, Best Ruby On Rails Development Company, Best Ruby On Rails Development Company company"
        />
        <link rel="canonical" href="https://www.infokoders.com" />
        <meta
          property="og:title"
          content="Best Ruby On Rails Development Company | InfoKoders Technologies"
        />
        <meta
          property="og:description"
          content="InfoKoders Technologies is one of the best Best Ruby On Rails Development Company & the unmatched destination to embrace exceptional technological solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.infokoders.com/" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Best Ruby On Rails Development Company | InfoKoders Technologies"
        />
        <meta
          name="twitter:description"
          content="InfoKoders Technologies is one of the best Best Ruby On Rails Development Company & the unmatched destination to embrace exceptional business-centric technological solutions."
        />
        <meta name="twitter:url" content="https://www.infokoders.com/" />
        <meta name="twitter:domain" content="www.infokoders.com" />
        <meta name="url" content="https://www.infokoders.com/" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-R44FSHSD3N"
          strategy="afterInteractive"
        />
        <script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R44FSHSD3N');
          `}
        </script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          id="scrollUp"
          href="#"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </a>
        <main>{children}</main>
      </body>
    </html>
  );
}
