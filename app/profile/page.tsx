import {
  Edit2,
  Phone,
  Mail,
  Wallet,
  ShoppingBag,
  MapPin,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-500 text-white p-4 flex items-center gap-3">
        <Link href="/home">
          <ArrowLeft />
        </Link>
        <h1 className="text-lg font-medium">My Profile</h1>
      </div>

      <div className="p-4 space-y-4 w-full md:w-3/4 mx-auto">
        {/* Profile Section */}
        <Card className="p-4">
          <div className="flex items-center justify-between  p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 bg-yellow-600">
                <AvatarFallback className="bg-yellow-500 text-white font-medium">
                  K
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-gray-900">Kiya</span>
            </div>
            <Edit2 className="w-5 h-5 text-gray-500" />
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-900">0987654321</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-900">feane@example.com</span>
            </div>
            <Edit2 className="w-5 h-5 text-gray-500" />
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="p-4 space-y-4">
          {/* Feane's Wallet */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Wallet className="w-5 h-5 text-gray-500" />
              <span className="text-gray-900">Feane&apos;s Wallet</span>
            </div>
            <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
              0 Points
            </span>
          </div>

          <hr className="border-gray-200" />

          {/* My Orders */}
          <div className="flex items-center gap-3 py-3">
            <ShoppingBag className="w-5 h-5 text-gray-500" />
            <span className="text-gray-900">My Orders</span>
          </div>

          <hr className="border-gray-200" />

          {/* My Addresses */}
          <div className="flex items-center gap-3 py-3">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span className="text-gray-900">My Addresses</span>
          </div>

          <hr className="border-gray-200" />

          {/* Logout */}
          <div className="flex items-center gap-3 py-3">
            <LogOut className="w-5 h-5 text-gray-500" />
            <span className="text-gray-900">Logout</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
