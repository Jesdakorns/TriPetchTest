import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import CustomProviders from "./Provider";
import { themeColor } from "@/utils/themeColor";
import LogoMain from '@/src/assets/images/logo_main.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tri Petch Test",
  description: "tri petch test",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <ThemeRegistry options={{ key: "mui" }}>
        <body className={inter.className}>
          <CustomProviders>
            {children}
          </CustomProviders>
        </body>
      </ThemeRegistry>
    </html>
  );
}
