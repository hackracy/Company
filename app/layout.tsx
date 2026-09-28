import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "OffDefOps - The Complete Cybersecurity Solutions",
  description: "Fully featured cybersecurity focused company.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[#0b0e11] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}