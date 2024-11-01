import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
    </div>
  );
}