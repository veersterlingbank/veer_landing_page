import Footer from "components/Footer";
import Header from "components/Header";
import MobileMenu from "components/MobileMenu";
import ScheduleDemo from "components/ScheduleDemo";
import Spinner from "components/Spinner";
import {
  useState,
  createContext,
  Suspense,
  useContext,
  useEffect,
} from "react";
import { Outlet } from "react-router-dom";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isModalOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isMenuOpen]);

  return (
    <ModalContext.Provider
      value={{ toggleModal, closeModal, toggleMenu, closeMenu }}
    >
      <div className="relative bg-[#12131A] h-[100vh]">
        <Suspense fallback={<Spinner />}>
          <Header />
          <Outlet />
          <Footer />
          {isModalOpen && <ScheduleDemo />}
          {isMenuOpen && <MobileMenu />}
        </Suspense>
      </div>
    </ModalContext.Provider>
  );
}
