import { CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <CardContent>
        <div>
          <h1>Sign Up</h1>
        </div>
        <form>
          <div>
            <label htmlFor="name"> Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="phone">Mobile no.</label>
            <input type="tel" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </CardContent>
    </>
  );
}
