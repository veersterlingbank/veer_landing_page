import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative bg-[#12131A] h-[100vh]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}