import Link from "next/link";
import { MdOutlinePets } from "react-icons/md";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Expo } from "gsap/all";

const Navbar = () => {
  useEffect(() => {
    // Create the first timeline for #nav
    const t1 = gsap.timeline({ paused: true });
    t1.to("#logo", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    });

    // Create the second timeline for #menu
    const t2 = gsap.timeline({ paused: true });
    t2.to("#menu", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    });

    // Play both timelines
    t1.play();
    t2.play();
  }, []);

  return (
    <nav
      id="nav"
      className="container w-full px-20 py-5 overflow-hidden relative text-zinc-100 flex justify-between items-center"
    >
      <Link href={"/"}>
        <div
          id="logo"
          className="logo translate-y-[150%] uppercase opacity-100 flex gap-4 items-center justify-center text-2xl"
        >
          <span className="text-yellow-300 mt-3">Pawsnation</span>
          <MdOutlinePets className="text-white" size={50} />
        </div>
      </Link>
      <div id="menu" className="menu translate-y-[250%] ">
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
