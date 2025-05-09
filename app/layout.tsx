import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eduardo Puentes – SWE Portfolio',
  description: 'Backend Software Engineer portfolio for Eduardo Puentes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-6 py-10 sm:w-full w-6/10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
