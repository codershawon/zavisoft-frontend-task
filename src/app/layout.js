import { Rubik } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-rubik',
});

export const metadata = {
  title: 'Zavisoft Frontend Task',
  description: 'E-commerce frontend implementation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-[#E7E7E3] text-gray-900 antialiased`}>
        <CartProvider>
          <Navbar />
        {children}
        </CartProvider>
      </body>
    </html>
  );
}