import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AquaWorld - Home of Exquisite Fish',
  description: 'Discover the most exquisite fish for your aquarium!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-aqua-light text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
