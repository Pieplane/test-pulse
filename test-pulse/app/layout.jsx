import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: 'BrowArt',
    description: 'Find your brow art dream',
    keywords: 'brow, find art',
};

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang="en">
      <body>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout