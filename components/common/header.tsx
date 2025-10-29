import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const isLogged = false;
  return (
    <nav className="flex justify-between items-center py-4 lg:px-4 px-2">
      <div className="flex  lg:flex-1">
        <Link className="flex lg:gap-1 text-gray-900 hover:text-gray-600 transform transition-all duration-200 ease-in-out items-center" href={"/"}>
          <BrainCircuitIcon size={19}/>
          <span className="font-extrabold md:text-xl ">BrainDeck</span>
        </Link>
      </div>
      <div className="flex justify-center gap-4 lg:gap-12 lg:items-center font-medium ">
        <Link href={"/#pricing"} className="text-gray-800  transform transition-all duration-200 ease-in-out p-1 hover:bg-gray-100 rounded-md">Pricing</Link>
        {isLogged && <Link href={"/#dashboard"} className="text-gray-800 transform transition-all duration-200 ease-in-out p-1 hover:bg-gray-100 rounded-md ">Your Summaries</Link>}
      </div>
      <div>
        <Link className="text-gray-800  flex lg:flex-1 lg:justify-end font-medium transform transition-all duration-200 ease-in-out p-1 px-3 border-2 hover:bg-gray-100 rounded-md" href={"/#sign-in"}>Sign In</Link>
      </div>
    </nav>
  );
}
