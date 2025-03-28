import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We take pride in the food we serve and the experience we provide to
            our customers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">We Are Feane</h3>
            <p className="text-gray-700 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="text-gray-700 mb-6">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn&apos;t anything embarrassing hidden in the middle
              of text. All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
