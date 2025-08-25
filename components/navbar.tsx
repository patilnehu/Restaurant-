"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ for active route
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/card-context";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname(); // ✅ get current path

  const { cart } = useCart();

  // Handle smooth scrolling for same-page sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // ✅ close menu when clicked

    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Update active section based on scroll position (only on home page)
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["menu", "about", "book-table"];

      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 200 &&
            scrollPosition < offsetTop + offsetHeight - 200
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className="py-6 px-4 md:px-8 w-full absolute top-0 z-50 bg-secondary/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          onClick={() => scrollToSection("home")}
          className="dancing-script text-4xl font-bold text-white"
        >
          Feane
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/home">
                <button
                  className={`${
                    pathname === "/home" ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 text-lg`}
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link href="">
                <button
                  onClick={() => scrollToSection("menu")}
                  className={`${
                    pathname === "/menu" ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 text-lg`}
                >
                  Menu
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  pathname === "/about-us" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("book-table")}
                className={`${
                  pathname === "/" && activeSection === "book-table"
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                Book Table
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-4 text-white">
            <Link href="">
              <User
                size={20}
                className={`${
                  pathname === "/" ? "text-yellow-400" : "hover:text-yellow-300"
                }`}
              />
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart
                size={22}
                className={`${
                  pathname === "/cart"
                    ? "text-yellow-400"
                    : "hover:text-yellow-300"
                }`}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            <button className="hover:text-yellow-300">
              <Search size={20} />
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              ORDER ONLINE
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-secondary p-4 z-50">
            <ul className="flex flex-col space-y-4 mb-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`${
                    pathname === "/" && activeSection === "home"
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className={`${
                    pathname === "/" && activeSection === "menu"
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${
                    pathname === "/" && activeSection === "about"
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("book-table")}
                  className={`${
                    pathname === "/" && activeSection === "book-table"
                      ? "text-yellow-400"
                      : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  Book Table
                </button>
              </li>
            </ul>

            <div className="flex items-center justify-between text-white">
              <div className="flex space-x-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <User
                    size={20}
                    className={`${
                      pathname === "/"
                        ? "text-yellow-400"
                        : "hover:text-yellow-300"
                    }`}
                  />
                </Link>

                <Link
                  href="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative"
                >
                  <ShoppingCart
                    size={20}
                    className={`${
                      pathname === "/cart"
                        ? "text-yellow-400"
                        : "hover:text-yellow-300"
                    }`}
                  />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>

                <Link href="/search" onClick={() => setIsMenuOpen(false)}>
                  <Search
                    size={20}
                    className={`${
                      pathname === "/search"
                        ? "text-yellow-400"
                        : "hover:text-yellow-300"
                    }`}
                  />
                </Link>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                ORDER ONLINE
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
