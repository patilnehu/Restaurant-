import Image from "next/image"

interface FoodItemProps {
  item: {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
  }
}

export default function FoodItem({ item }: FoodItemProps) {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden">
      <div className="flex justify-center p-4">
        <div className="relative w-48 h-48">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
        </div>
      </div>
      <div className="bg-secondary text-white p-6 rounded-t-2xl">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-300 mb-4 text-sm">{item.description}</p>
        <p className="text-lg font-bold">${item.price}</p>
      </div>
    </div>
  )
}

