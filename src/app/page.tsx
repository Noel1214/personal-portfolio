import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div><h1 className="text-xl m-5 absolute right-4">Resume</h1></div>
      <div className="w-screen h-screen ml-[8rem] mr-[2rem] flex items-center">
        <div className="min-w-[44rem] flex items-center justify-between -translate-y-6 break-words">
          {/* Profile image  */}
          <div>
            <Image
              className="w-[20rem] h-[20rem] scale-90 object-cover rounded-full overflow-hidden"
              src="/Noel.jpg"
              width={900}
              height={900}
              alt="Picture of Noel"
            />
          </div>
          {/* Name */}
          <div className="text-[27px] font-se">
            <h3>Hi my name is</h3>
            <h1 className="text-3xl font-bold">Noel Sebu</h1>
            <h3>I am a MERN stack developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
