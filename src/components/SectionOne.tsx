"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const SectionOne = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Iam","I am a MERN stack developer."],
      typeSpeed: 40,
      loop: true,
      fadeOut: true,
        });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
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
          <div className="w-auto text-[27px]">
            <h3 className="greeting-h3">Hi, my name is</h3>
            <h1 className="text-5xl font-semibold">Noel Sebu</h1>
            <div ref={el} className="h-5 min-w-2 inline-block">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
