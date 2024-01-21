import { Rubik } from 'next/font/google';
import "./globals.css";
const rubik = Rubik({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: "Disease Detective",
  description: "A project by smack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}