import Footer from "components/Footer";
import Header from "components/Header";
import Spinner from "components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative bg-[#12131A] h-[100vh]">
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
}