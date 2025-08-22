"use client";

import { useCart } from "@/app/context/card-context";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface FoodItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

export default function FoodItem({ item }: FoodItemProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-center p-4">
        <div className="relative w-48 h-48 rounded-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="bg-secondary text-white p-6 rounded-t-2xl">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-transform hover:scale-110"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
