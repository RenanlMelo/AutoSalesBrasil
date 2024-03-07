"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Anúncios", href: "/anuncios" },
];

const Navbar = ({ isFixed }: any) => {
  const pathname = usePathname();

  const [headerH, setHeaderH] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflowX = "hidden";
  };

  const headerRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        setHeaderH(headerRef.current.clientHeight);
      }
    }
    window.addEventListener("resize", updateHeaderHeight);
    updateHeaderHeight();

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`py-4 shadow-header z-50 bg-[#080810] border-b border-zinc-700 ${
        isFixed ? "fixed top-0 w-full" : ""
      }`}
    >
      <div className="p-2 sm:py-2 lg:py-0 sm:px-6 xl:px-10 max-w-full flex justify-between items-center z-50">
        <Link
          href="/"
          className="flex justify-center items-center gap-4 lg:gap-6"
        >
          <Image
            src="/logo3.png"
            alt="logo"
            width={100}
            height={100}
            className="w-16 rounded-full aspect-square xl:w-24 md:w-20"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-[#c8c8cc] font-semibold text-lg md:text-2xl xl:text-3xl px-2">
              Auto Sales Brasil
            </h1>
            <span className="w-full bg-[#d8d8dd] h-px" />
            <span className="w-2/3 mt-2 bg-[#d8d8dd] h-px" />
          </div>
        </Link>
        <nav
          style={{ top: `${headerH}px` }}
          className={`gap-8 2xl:gap-12 text-[#d8d8dd] hidden lg:flex`}
        >
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  passHref
                  className="text-xl xl:text-2xl text-[#006039] border-b-2 pb-1.5 border-[#006039] font-bold hover:text-[#bbb] hover:border-[#bbb] ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  passHref
                  className="text-xl xl:text-2xl transition duration-100 text-[#bbb] after:block after:h-[2px] after:bg-[#bbb] after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center after:translate-y-1"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex aspect-square lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              style={{ top: `${headerH}px` }}
              className="absolute right-0 z-[60] bg-[#111] p-12 flex flex-col gap-y-6 justify-center items-center"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.5 }}
            >
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.href ? (
                    <Link
                      href={link.href}
                      passHref
                      className="text-xl xl:text-2xl text-red-700 font-bold"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      passHref
                      className="text-xl xl:text-2xl transition duration-100 text-[#bbb]"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
