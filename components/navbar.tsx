"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="dancing-script text-3xl font-bold text-white">
          Feane
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-white hover:text-yellow-300 text-lg">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-yellow-300 text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href="/book-table" className="text-white hover:text-yellow-300 text-lg">
                Book Table
              </Link>
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
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">ORDER ONLINE</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-secondary p-4 z-50">
            <ul className="flex flex-col space-y-4 mb-4">
              <li>
                <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white hover:text-yellow-300 text-lg block">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-yellow-300 text-lg block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/book-table" className="text-white hover:text-yellow-300 text-lg block">
                  Book Table
                </Link>
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
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">ORDER ONLINE</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

