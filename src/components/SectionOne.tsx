"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const SectionOne = () => {
  const el = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Iam", "I am a MERN stack developer."],
      typeSpeed: 40,
      loop: true,
      backDelay: 1700,
      fadeOut: true,
      startDelay: 2600,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        duration: 2,
        scale: 0.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".greetings span",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        delay: 0.7,
        stagger: 0.2,
        ease: "none",
      }
    );
    gsap.fromTo(
      ".noel-name span",
      {
        rotateY: 100,
        opacity: 0,
      },
      {
        rotateY: 0,
        opacity: 1,
        delay: 1.7,
        duration: 1.5,
        stagger: 0.3,
        ease: "bounce.out",
      }
    );
    gsap.from(".type-write-effect", {
      opacity: 0,
      delay: 2.5,
      duration: 0.4,
    });
    gsap.from(".resume-h1", {
      y: 100,
      duration: 1,
      delay: 2.5,
      ease: "back.out(2)",
    });
  }, []);

  return (
    <div className="relative">
      <div className="absolute h-10 py-2 top-5 right-10 overflow-hidden">
        <h1 className="resume-h1  text-xl">Resume</h1>
      </div>
      <div className="w-screen h-[86vh] ml-[8rem] mr-[2rem] flex items-center">
        <div className="min-w-[45rem] flex items-center gap-5 -translate-y-6 break-words">
          {/* Profile image  */}
          <div className="w-[20rem]">
            <Image
              ref={imageRef}
              className="profile-image scale-0 w-[20rem] h-[20rem] object-cover rounded-full overflow-hidden"
              src="/Noel.jpg"
              width={900}
              height={900}
              alt="Picture of Noel"
            />
          </div>
          {/* Name */}
          <div className="w-auto text-[27px] flex flex-col gap-2">
            <div className="h-10 w-[13.7rem] px-2 flex gap-1 -translate-x-2 overflow-hidden">
              <div className="greetings flex gap-2">
                <span>Hi,</span>
                <span>my</span>
                <span>name</span>
                <span>is</span>
              </div>
            </div>
            <div className="noel-name text-5xl flex gap-2 font-semibold">
              <span className="">Noel</span>
              <span className="">Sebu</span>
            </div>
            <div className="type-write-effect">
              <span ref={el} className="h-5 min-w-2 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
