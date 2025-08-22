"use client";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/card-context";

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
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">My Order</h1>

      {cart.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground text-lg">Your cart is empty</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={
                          item.image ||
                          `/placeholder.svg?height=80&width=80&query=${encodeURIComponent(
                            item.name
                          )}`
                        }
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="font-medium text-lg">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleDecrement(item.id, item.quantity)
                          }
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium text-lg min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() =>
                            handleIncrement(item.id, item.quantity)
                          }
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="text-right min-w-[4rem]">
                        <p className="font-semibold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Total Items:</span>
                <span className="font-semibold">{getTotalItems()}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <hr />
              <div className="flex justify-between text-xl font-bold">
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
  );
}
