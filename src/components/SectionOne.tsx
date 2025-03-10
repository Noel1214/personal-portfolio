"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const SectionOne = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Iam", "I am a MERN stack developer."],
      typeSpeed: 40,
      loop: true,
      fadeOut: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const greetingH3: null | HTMLHeadingElement = document.querySelector(".greeting-h3");
    // const text = greetingH3?.textContent;
    const text = "Hi, my name is";
    const splittedText = text?.split("");

    let clutter = "";

    splittedText?.forEach((element, index) => {
      clutter += `<span>${element}</span>`;
      console.log(element, index);
    });
    greetingH3.innerHTML = clutter;

    gsap.from(".greeting-h3 span", {
      y: 70,
      opacity: 0,
      duration: 0.4,
    //   delay: 0.2,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="">
      <div>
        <h1 className="resume-h1 text-xl m-5 absolute right-4">Resume</h1>
      </div>
      <div className="w-screen h-screen ml-[8rem] mr-[2rem] flex items-center">
        <div className="min-w-[45rem] flex items-center gap-5 -translate-y-6 break-words">
          {/* Profile image  */}
          <div className="w-[20rem]">
            <Image
              className="w-[20rem] h-[20rem] scale-90 object-cover rounded-full overflow-hidden"
              src="/Noel.jpg"
              width={900}
              height={900}
              alt="Picture of Noel"
            />
          </div>
          {/* Name */}
          <div className="w-auto text-[27px] flex flex-col gap-2">
            <h3 className="greeting-h3 h-10 w-[13.7rem] px-2 flex gap-1 -translate-x-2 overflow-hidden"></h3>
            <h1 className="text-5xl font-semibold">Noel Sebu</h1>
            <div>
              <span ref={el} className="h-5 min-w-2 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
