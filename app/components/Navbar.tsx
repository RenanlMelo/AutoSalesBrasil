"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Anúncios", href: "/anuncios" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [headerH, setHeaderH] = useState(0);
  const headerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderH(headerRef.current.clientHeight);
    }
  }, [headerH]);

  return (
    <header ref={headerRef} className="py-4 shadow-2xl z-50 bg-[#f8f8ff]">
      <div className="p-2 sm:py-2 lg:py-0 sm:px-6 xl:px-10 max-w-full flex justify-between items-center z-50">
        <Link
          href="/"
          className="flex justify-center items-center gap-4 lg:gap-6"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-16 rounded-full aspect-square xl:w-24 md:w-20"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-[#0B0227] font-semibold text-lg md:text-2xl xl:text-3xl px-2">
              Auto Sales Brasil
            </h1>
            <span className="w-full bg-[#0B0227] h-px" />
            <span className="w-2/3 mt-2 bg-[#0B0227] h-px" />
          </div>
        </Link>
        <nav className="hidden gap-8 2xl:gap-12 lg:flex text-[#0B0227]">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  passHref
                  className="text-xl xl:text-2xl text-red-700 border-b-2 pb-1.5 border-red-700 font-bold hover:text-[#505050] hover:border-[#505050] ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  passHref
                  className="text-xl xl:text-2xl transition duration-100 text-[#505050] after:block after:h-[2px] after:bg-[#505050] after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center after:translate-y-1"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex aspect-square lg:hidden">
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
      </div>
    </header>
  );
};

export default Navbar;
