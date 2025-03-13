"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";

const MarqueeBanner = () => {
  const [flowDirection, setflowDirection] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      setflowDirection(true);
    } else {
      setflowDirection(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    // gsap.killTweensOf(".marquee span");
    // gsap.killTweensOf(".arrow");

    // gsap.set(".marquee span", { x: "0" });
    // gsap.set(".marquee span", { x: flowDirection ? "-100%": "100%" });

    gsap.to(".arrow", {
      rotate: flowDirection ? 0 : 180,
      ease: "back",
    });
    // gsap.to(".marquee span", {
    //   x: flowDirection ? "100%" : "-100%",
    //   duration: 5,
    //   repeat: -1,
    //   ease: "linear",
    // });
    gsap.to(".marquee span", {
      x: `+=${flowDirection ? "100%" : "-100%"}`,
      opacity: 1,
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }, [flowDirection]);

  return (
    <div className="overflow-x-hidden text-white">
      <div className="marquee -translate-x-[50vw] bg-amber-300 h-[6rem] w-[200vw] flex items-center justify-center">
        {[...Array(14)].map((_, index) => (
          <span
            key={index}
            className="w-[32rem] flex items-center gap-[4.4rem] text-4xl text-black font-semibold font-serif shrink-0"
          >
            <FaArrowRightLong className="arrow" />
            <h1>Beyond The Limits</h1>
          </span>
        ))}

        {/* keep it here  */}
        {/* <span className="bg-r ed-300 flex gap-3 text-4xl text-black font-semibold font-serif shrink-0">
          <FaArrowRightLong />
          <h1>Live the Life</h1>
        </span>

        {/* Keep it here  */}
      </div>
    </div>
  );
};

export default MarqueeBanner;
