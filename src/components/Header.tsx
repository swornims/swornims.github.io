import { useState } from "react";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white opacity-95 py-4 sticky top-0 z-30 px-4 sm:px-6 lg:px-30">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-xl sm:text-2xl">Swornims.</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-20">
          <ul className="flex gap-6 lg:gap-10">
            <a href="#portfolio">
              <li className="cursor-pointer hover:text-gray-600 transition-colors">
                Portfolio
              </li>
            </a>
          </ul>
          <a href="#connect">
            <button className="border border-gray-500 px-4 lg:px-8 py-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out text-sm lg:text-base">
              Connect with me
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <img src={closeIcon} alt="Close icon" className="size-6" />
          ) : (
            <img src={menuIcon} alt="Menu icon" className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <ul className="flex flex-col gap-4 mt-4">
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              <li className="cursor-pointer hover:text-gray-600 transition-colors py-2">
                Portfolio
              </li>
            </a>
            <a href="#connect" onClick={() => setIsMenuOpen(false)}>
              <li className="py-2">
                <button className="border border-gray-500 px-6 py-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out w-full text-center">
                  Connect with me
                </button>
              </li>
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
}
