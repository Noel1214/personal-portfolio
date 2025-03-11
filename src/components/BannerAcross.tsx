"use client";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";

const BannerAcross = () => {
  useEffect(() => {
    gsap.to(".thrive-text", {
      transform: "translateX(0%)",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
    const handleClick = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        gsap.to(".thrive-text", {
          transform: "translateX(-200%)",
          duration: 5,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".arrow", {
          rotate: 180,
        });
      } else {
        gsap.to(".thrive-text", {
          transform: "translateX(0%)",
          duration: 5,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".arrow", {
          rotate: 0,
        });
      }
    };
    window.addEventListener("wheel", handleClick);

    return () => window.removeEventListener("wheel", handleClick); // Cleanup on unmount
  }, []);

  return (
    <div className="flex bg-yellow-500">
      {[...Array(14)].map((item, index) => (
        <div
          key={index}
          className="thrive-text h-full p-4 flex items-center gap-16 shrink-0"
        >
          <h1 className="text-4xl text-black font-semibold uppercase">
            Beyond The Limits
          </h1>
          <FaArrowRightLong
            className="arrow text-black translate-y-1"
            size={40}
          />
        </div>
      ))}
      */
    </div>
  );
};

export default BannerAcross;