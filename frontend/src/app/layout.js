"use client"; 

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-aqua-light text-gray-900">
        <Provider store={store}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </body>
    </html>
  );
}
