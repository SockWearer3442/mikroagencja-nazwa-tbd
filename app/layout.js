import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Studio Falstart — Strony internetowe dla marek z charakterem",
  description:
    "Budujemy charakterne strony internetowe, które pomagają małym markom rosnąć. Pakiety Starter, Biznes i Sklep Mikro dopasowane do Twoich potrzeb.",
  metadataBase: new URL("https://studio-falstart.pl"),
  openGraph: {
    title: "Studio Falstart — Strony www dla mikro firm",
    description:
      "Budujemy charakterne strony internetowe, które pomagają małym markom rosnąć.",
    url: "https://studio-falstart.pl",
    siteName: "Studio Falstart",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={urbanist.variable}>
      <body>
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  );
}
