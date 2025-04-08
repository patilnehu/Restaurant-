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
              <label
                htmlFor="name"
                className="text-sm font-medium block text-white mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                placeholder="John Doe"
                className=" bg-secondary-foreground/10 border-gray-700 focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium block text-white mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                placeholder="+1 123 456 7890"
                className="bg-secondary-foreground/10 border-gray-700
                focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium block text-white mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="people"
                className="text-sm font-medium block text-white mb-2"
              >
                How Many Persons?
              </label>
              <input
                id="people"
                type="number"
                placeholder="2"
                min="1"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="date"
                className="text-sm font-medium block text-white mb-2"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="time"
                className="text-sm font-medium block text-white mb-2"
              >
                Time
              </label>
              <input
                id="time"
                type="time"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary p-2 rounded-md"
              ></input>
            </div>
            <div className="space-y-2 md:col-span-2 mt-6">
              <label
                htmlFor="message"
                className="text-sm font-medium block text-white mb-2"
              >
                Special Request
              </label>
              <textarea
                id="message"
                placeholder="Any special requests or preferences?"
                className="bg-secondary-foreground/10 border-gray-700 focus:border-primary w-96  p-2 rounded-md"
                rows={4}
              />
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
