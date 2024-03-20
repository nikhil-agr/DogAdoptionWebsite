"use client";
import React, { useEffect, useRef } from "react";
import Marquee from "../Marquee";
import Page2 from "../Page2";
import Image from "next/image";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Expo } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const scrollRef = useRef(null);

  // useGSAP(() => {
  //   const t1 = gsap.timeline();
  //   const t2 = gsap.timeline();
  //   const t3 = gsap.timeline();
  //   gsap.registerPlugin(ScrollTrigger);

  //   t3.to(".head", {
  //     y: 0,
  //     duration: 2,
  //     opacity: 1,
  //     stagger: 0.2,
  //     delay: -1,
  //     ease: Expo.easeIn,
  //   });
  //   t1.to("#text", {
  //     ScrollTrigger: {
  //       trigger: "#text",
  //     },
  //     x: 1000,
  //     duration: 2,
  //     delay: 3,
  //     stagger: 0.5,
  //     ease: Expo.easeInOut,
  //   });
  //   t2.to("#img", {
  //     x: -400,
  //     duration: 2,
  //     delay: 3,
  //     stagger: 0.5,
  //     ease: Expo.easeInOut,
  //   });
  // }, []);
  useEffect(() => {
    if (scrollRef.current) {
      const loco = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }
  }, []);

  return (
    <>
      <main className="h-screen container overflow-hidden">
        <div className="text-center bg-red-400 flex flex-col justify-center items-center h-[20vh] overflow-hidden relative font-Gilroy text-6xl my-20">
          <div className="head top-0 absolute opacity-0">
            Every Pet Deserves a Loving Home
          </div>
          <div className="head absolute top-16 opacity-0">
            <span className="text-yellow-400">Adopt</span> a Pet Today
          </div>
        </div>
        <section className="h-[40vh]  flex justify-between items-center relative px-20 py-20">
          <div id="text" className="text-5xl w-[60%] absolute left-[-900px]">
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
      <section>
        <div
          ref={scrollRef}
          className="h-screen bg-red-600 rounded-t-3xl py-20"
          data-scroll
          data-scroll-container
          data-scroll-speed={0.2}
        >
          <Marquee> Do not Shop But Adopt </Marquee>
        </div>
      </section>
    </>
  );
};

export default Home;
