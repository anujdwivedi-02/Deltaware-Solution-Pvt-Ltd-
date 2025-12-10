import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AnimatedButton from "../ui/AnimatedButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-quantum/90 backdrop-blur-sm border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="md:w-16 md:h-16 w-12 h-12 relative bg-gradient-to-br from-cyber to-violet rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_#00E6E6] transition-all">
            <Image
              src="/logo.jpg"
              alt="Deltaware Logo"
              width={100}
              height={100}
              className="md:w-16 md:h-16 w-12 h-12 rounded-md object-cover"
            />
            <div className="h-full w-full absolute inset-0"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-fira-code font-heading font-bold text-white leading-none">
              DELTAWARE
            </span>
            <span className="text-[12px] font-fira-code text-mist tracking-widest">
              SOLUTIONS
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item: any) => (
            <Link
              key={item.path}
              href={item.path}
              className={`group pb-2 whitespace-nowrap relative text-md font-medium transition-colors hover:text-cyber ${
                pathName === item.path ? "text-cyber" : "text-mist"
              }`}
            >
              {item.label}
              <span
                className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        h-[2px] w-0 bg-cyber
        transition-all duration-300
        group-hover:w-full
      "
              />
            </Link>
          ))}

          <AnimatedButton
            textName="Enroll Now"
            href="/enroll-now"
            margin="ml-2"
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center group lg:hidden text-white transition-all"
        >
          <span
            className={`
      bg-white h-0.5 w-8 rounded transform transition-all duration-300
      ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}
    `}
          />

          <span
            className={`
      bg-white h-0.5 w-8 rounded transition-all duration-300
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
          />

          <span
            className={`
      bg-white h-0.5 w-8 rounded transform transition-all duration-300
      ${isOpen ? "-rotate-45 translate-y-0.5" : "translate-y-1.5"}
    `}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-quantum/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item: any, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`text-lg font-heading hover:text-cyber transition-colors  ${
                      location.pathname === item.path
                        ? "text-cyber"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <AnimatedButton
                textName="Enroll Now"
                href="/enroll-now"
                margin={"mt-4"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
