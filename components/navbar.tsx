"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100, // Offset for navbar height
        behavior: "smooth",
      });
    } else if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Get all sections
      const sections = ["menu", "about", "book-table"];

      // Check if we're at the top (home)
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      // Find the current section
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
  }, []);

  return (
    <nav className="py-6 px-4 md:px-8 sticky top-0 z-50 bg-secondary/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="#"
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
              <button
                onClick={() => scrollToSection("home")}
                className={`${
                  activeSection === "home" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("menu")}
                className={`${
                  activeSection === "menu" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  activeSection === "about" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("book-table")}
                className={`${
                  activeSection === "book-table"
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-300 text-lg`}
              >
                Book Table
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-4 text-white">
            <button className="hover:text-yellow-300">
              <User size={20} />
            </button>
            <button className="hover:text-yellow-300">
              <ShoppingCart size={20} />
            </button>
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
                    activeSection === "home" ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className={`${
                    activeSection === "menu" ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${
                    activeSection === "about" ? "text-yellow-400" : "text-white"
                  } hover:text-yellow-300 text-lg block w-full text-left`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("book-table")}
                  className={`${
                    activeSection === "book-table"
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
                <button className="hover:text-yellow-300">
                  <User size={20} />
                </button>
                <button className="hover:text-yellow-300">
                  <ShoppingCart size={20} />
                </button>
                <button className="hover:text-yellow-300">
                  <Search size={20} />
                </button>
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
