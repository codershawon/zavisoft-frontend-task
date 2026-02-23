import { Open_Sans, Rubik } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-rubik',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans", 
});

export const metadata = {
  title: 'Zavisoft Frontend Task',
  description: 'E-commerce frontend implementation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${openSans.variable}`}>
      <body className={`${rubik.className} bg-[#E7E7E3] text-gray-900 antialiased`}>
        <CartProvider>
          <Navbar />
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}