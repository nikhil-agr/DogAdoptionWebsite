import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container w-full px-20 py-10 h-10  text-zinc-100 flex justify-between items-center">
      <Link href={"/"}>
        <div className="logo uppercase flex gap-4 items-center justify-center text-2xl">
          <span className="text-yellow-300 mt-3">Pawsnation</span> 
          <MdOutlinePets className="text-white" size={50} />
        </div>
      </Link>
      <div className="menu">
        <ul className="flex list-none gap-10 cursor-pointer">
          <Link href={"/"}>
            <li className="hover:text-yellow-300">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-yellow-300">About</li>
          </Link>
          <Link href={"/breeds"}>
            <li className="hover:text-yellow-300">Breeds</li>
          </Link>
          <Link href={"/center"}>
            <li className="hover:text-yellow-300">Center Near By</li>
          </Link>
          <Link href={"/help"}>
            <li className="hover:text-yellow-300">Help/Donation</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
