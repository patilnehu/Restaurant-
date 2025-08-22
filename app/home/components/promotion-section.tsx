import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const promotions = [
  {
    id: 1,
    title: "Tasty Thursdays",
    discount: "20%",
    image:
      "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Pizza Days",
    discount: "15%",
    image:
      "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PromotionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-secondary rounded-lg p-6 flex items-center gap-6 w-full md:w-2/5"
            >
              <div className="relative w-24 h-24 flex-shrink-0 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 cursor-pointer">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  fill
                  className="rounded-full object-cover border-4 border-primary"
                />
              </div>
              <div className="text-white">
                <h3 className="text-lg">{promo.title}</h3>
                <h2 className="text-3xl font-bold my-2">
                  {promo.discount} <sub>off</sub>
                </h2>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  Order Now <ShoppingCart className="ml-2 h-4 w-4 " />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
