import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dashboard",
  description: "Aquarium Fish Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="p-4 bg-gray-100 h-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
