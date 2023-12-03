import "./globals.css";
import { sora } from "@/utils/fonts";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    template: "%s | Diet App",
    default: "Diet App",
  },
  metadataBase: new URL("https://next-diet-app.vercel.app"),
  description: "The most reliable Diet App for your daily needs",
  generator: "Next.js",
  applicationName: "Diet App",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Diet App",
    "Healthy Foods",
    "Health",
    "Marn Htet Zan",
  ],
  authors: [
    {
      name: "Marn Tet Zan",
      url: "https://www.facebook.com/james.christian.3914207",
    },
  ],
  creator: "Marn Tet Zan",
  publisher: "Marn Tet Zan",
  openGraph: {
    title: "Diet App",
    description: "The most reliable Diet App for your daily needs.",
    url: "https://nextjs.org",
    siteName: "Diet App",
    images: [
      {
        url: "https://i.postimg.cc/rsLNx5vD/thumbnail.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://i.postimg.cc/rsLNx5vD/thumbnail.png",
        width: 1800,
        height: 1600,
        alt: "Diet App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "thumbnail_large_image",
    title: "Diet App",
    description: "The most reliable Diet App for your daily needs.",
    siteId: "1467726470533754880",
    creator: "@akamoana1",
    creatorId: "1467726470533754880",
    images: ["https://i.postimg.cc/rsLNx5vD/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
