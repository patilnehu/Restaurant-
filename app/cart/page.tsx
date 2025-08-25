"use client";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/card-context";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } =
    useCart();

  const handleIncrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrement = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity - 1);
  };

  return (
    <>
      <div className="bg-yellow-500 text-white p-4 flex items-center gap-3">
        <Link href="/home">
          <ArrowLeft />
        </Link>
        <h1 className="text-lg font-medium">My Order</h1>
      </div>
      <div className="container mx-auto p-4 sm:p-6 max-w-4xl">
        {cart.length === 0 ? (
          <Card>
            <CardContent className="p-6 sm:p-8 text-center">
              <p className="text-muted-foreground text-base sm:text-lg">
                Your cart is empty
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={
                            item.image ||
                            `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(
                              item.name
                            )}`
                          }
                          alt={item.name}
                          width={200}
                          height={200}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                        />
                        <div>
                          <h3 className="font-semibold text-base sm:text-lg">
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.description}
                          </p>
                          <p className="font-medium text-base sm:text-lg">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleDecrement(item.id, item.quantity)
                            }
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <span className="font-medium text-base sm:text-lg min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleIncrement(item.id, item.quantity)
                            }
                            className="h-7 w-7 sm:h-8 sm:w-8"
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <div className="text-right min-w-[4rem] sm:min-w-[4rem]">
                          <p className="font-semibold text-base sm:text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="h-7 w-7 sm:h-8 sm:w-8"
                        >
                          <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-base sm:text-lg">
                  <span>Total Items:</span>
                  <span className="font-semibold">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg">
                  <span>Subtotal:</span>
                  <span className="font-semibold">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-base sm:text-lg">
                  <span>Shipping:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg sm:text-xl font-bold">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
