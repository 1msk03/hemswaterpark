
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopNav from "@/components/common/TopNav";
import Social from "@/components/common/Social";
import Chat from "@/components/common/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const metadata = {
  title: "Hems Water Park Jaipur - Best Water Park with Exciting Slides",
  description: "Discover Hems Water Park Jaipur - your go-to destination for epic fun and enjoyment. Experience spacious, clean changing rooms, tantalizing food & beverages, and the best slides in Jaipur. Perfect for families and couples!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </div>
      </head>
      <body className="font-Roboto bg-slate-100">
        <TopNav />
        <Header />
        {/* <Social /> */}
        {children}
     <Chat/>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
