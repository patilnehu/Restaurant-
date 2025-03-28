import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

export default function BookTableSection() {
  return (
    <div className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="dancing-script text-4xl font-bold mb-4">
            Book A Table
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Reserve your table at Feane and enjoy a delightful dining
            experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              /
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              {/* <Input
                id="phone"
                placeholder="+1 123 456 7890"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
              /> */}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              {/* <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
              /> */}
            </div>
            <div className="space-y-2">
              <label htmlFor="people" className="text-sm font-medium">
                How Many Persons?
              </label>
              {/* <Input
                id="people"
                type="number"
                placeholder="2"
                min="1"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
              /> */}
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              {/* <Input
                id="date"
                type="date"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
              /> */}
            </div>
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium">
                Time
              </label>
              {/* <Input
                id="time"
                type="time"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
              /> */}
            </div>
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Special Request
              </label>
              {/* <Textarea
                id="message"
                placeholder="Any special requests or preferences?"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary"
                rows={4}
              /> */}
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                Book Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
