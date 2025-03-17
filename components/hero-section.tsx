import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-14 md:py-40">
      <div className="max-w-xl text-white">
        <h1 className="dancing-script text-4xl md:text-6xl font-bold mb-4">
          Fast Food Restaurant
        </h1>
        <p className="text-lg mb-8 opacity-90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. possimus
          officiis asperiores ratione nemo excepturi quas maiores, atque
          expedita itaque nesciunt nisi? Consequuntur maxime repellat aliquam
          soluta dolor dignissimos adipisci.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
          Order Now
        </Button>
      </div>
    </div>
  );
}
