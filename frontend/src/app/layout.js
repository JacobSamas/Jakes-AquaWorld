import './globals.css';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';

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
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
