import '../App.css';
import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // jika scroll ke bawah, sembunyikan navbar
        setIsVisible(false);
      } else {
        // jika scroll ke atas, tampilkan navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full g-white/70 backdrop-blur-md bg-opacity-80 shadow-lg p-5 transition-transform duration-500  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <div className="text-gray-900 text-xl font-bold">Febri Movie</div>
        {/* menu */}
        {/* <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
