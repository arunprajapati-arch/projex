import SignIn from "@/components/sign-in";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SignIn/>
    </div>
  );
}
