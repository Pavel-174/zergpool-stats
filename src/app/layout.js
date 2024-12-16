import "./globals.css";
import { Inter } from 'next/font/google'

const openSans = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "ZP-stats",
  description: "Zergpool stats app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={openSans.className}
      >
        {children}
      </body>
    </html>
  );
}
