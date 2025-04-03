import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "NinjaTweet - Konoha Social",
  description: "Example by Binary Code Barn",
  openGraph: {
    title: "NinjaTweet - Konoha Social",
    description: "Example by Binary Code Barn",
    images: [
      {
      url: "/screenshot.png",
      width: 1200,
      height: 630,
      alt: "NinjaTweet - Konoha Social",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          defer
        ></script>
      </head>
      <body className={`${quicksand.variable} antialiased font-quicksand`}>
        {children}
      </body>
    </html>
  );
}
