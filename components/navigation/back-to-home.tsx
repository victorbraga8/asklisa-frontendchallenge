import Link from "next/link";
import { ArrowBigLeftDash } from "lucide-react";

const BackButton = () => {
  return (
    <Link
      href="/"
      className="mt-4 inline-block bg-blue-800 hover:bg-blue-400 transition-colors text-white py-2 px-4 rounded group"
    >
      <ArrowBigLeftDash className="group-hover:-translate-x-1 transition-all duration-300" />
    </Link>
  );
};

export default BackButton;
