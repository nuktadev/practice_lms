import Image from "next/image";
import React from "react";

const SingleCoursePage = () => {
  return (
    <div className="bg-gradient-to-l from-[#10ABF0] to-[#1F5E80]  relative overflow-hidden">
      <div className="absolute z-0 right-0 top-0 w-[700px] bg-cover h-full">
        <div className="bg-gradient-to-r absolute -z-10 from-[#189be2] to-[#070606] w-full h-full"></div>
        <Image
          src={"/assets/details.png"}
          alt="details"
          layout="responsive"
          width={500}
          height={500}
          className="object-cover absolute opacity-80 -z-10  h-full"
        />
      </div>
      <div className="root-container py-16">
        <div className="flex lg:w-7/12 relative z-10 flex-col gap-4">
          <h1 className="text-4xl text-white font-semibold">
            Course Page Details Here Course Page Details Here
          </h1>
          <p className="text-white/80 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatum illo molestias porro? Excepturi nisi voluptate corrupti
            ea sit dolor omnis iure iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus mollitia voluptas repellendus dicta ipsum
            voluptatum eum cupiditate, harum, dolores, labore qui. Veniam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
