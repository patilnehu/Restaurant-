"use client";

import { useState } from "react";
import FoodItem from "@/components/food-item";

const categories = ["All", "Burger", "Pizza", "Pasta", "Fries"];

const menuItems = [
  {
    id: 1,
    name: "Delicious Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f1.png",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Delicious Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f7.png",
    category: "Burger",
  },
  {
    id: 3,
    name: "Delicious Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f6.png",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Delicious Pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f4.png",
    category: "Pasta",
  },
  {
    id: 5,
    name: "French Fries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f5.png",
    category: "Fries",
  },
  {
    id: 6,
    name: "Delicious Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f3.png",
    category: "Pizza",
  },
  {
    id: 7,
    name: "Tasty Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f2.png",
    category: "Burger",
  },
  {
    id: 8,
    name: "Tasty Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f8.png",
    category: "Burger",
  },
  {
    id: 9,
    name: "Delicious Pasta",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem ut repellat non nam quibusdam magnam at fugiat vel dolor!",
    price: 20,
    image: "https://themewagon.github.io/feane/images/f9.png",
    category: "Pasta",
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl font-bold mb-6">Our Menu</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 text-lg transition-colors ${
                  activeCategory === category
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
