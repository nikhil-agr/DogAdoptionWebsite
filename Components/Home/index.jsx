"use client";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Page2 from "../Page2";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Expo } from "gsap/all";

const Home = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);
    const t4 = gsap.timeline({
      ScrollTrigger: {
        trigger: "#text",
        start: "top center",
        toggleActions: "pause none none none",
        markers: true,
        scrub: 1,
      },
    });
    t3.to("#head", {
      y: 0,
      duration: 2,
      stagger: 0.05,
      delay: 1,
      ease: Expo.easeIn,
    });
    t1.to("#text", {
      x: 1000,
      duration: 2,
      delay: 3,
      stagger: 0.5,
      ease: Expo.easeInOut,
    });
    t2.to("#img", {
      x: -400,
      duration: 2,
      delay: 3,
      stagger: 0.5,
      ease: Expo.easeInOut,
    });
    const loco = new LocomotiveScroll({ smooth: true });
  }, []);
  return (
    <>
      <Navbar />
      <main className="h-screen container overflow-hidden">
        <div className="text-center flex justify-center items-center h-[16vh] overflow-hidden relative font-Gilroy text-6xl my-20">
          <div id="head" className="absolute -translate-y-[120%]">
            Every Pet Deserves a Loving Home. <br />{" "}
            <span className="text-yellow-400">Adopt</span> a Pet Today
          </div>
        </div>
        <section className="h-[40vh] flex justify-between items-center relative px-20 py-20">
          <div
            id="text"
            className="text-5xl w-[60%] absolute left-[-900px]"
            // data-scroll
            // data-scroll-speed={0.2}
          >
            <h1>Looking for a good time?</h1>
            <p className="text-2xl">
              now is the time to open your heart and home to an animal in need.
              we all want to be rescued adopt a dog today
            </p>
          </div>
          <div id="img" className="absolute right-[-650px]">
            <Image
              src={"/assets/images/home-page-dog.png"}
              alt={"dog"}
              width={1000}
              height={1000}
            />
          </div>
        </section>
      </main>
      <Page2 />
    </>
  );
};

export default Home;
