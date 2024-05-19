import Image from "next/image";
import Link from "next/link";
import React from "react";
import courseImage from "../../../../public/assets/masjid.jpg";
const PopularCourses = () => {
  return (
    <div className="mx-auto  max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Link href={`/#`} className="uk-link-reset">
        <div className="bg-white drop-shadow shadow rounded-lg uk-transition-toggle md:flex">
          <div className="md:w-5/12 md:h-60 h-40 overflow-hidden rounded-l-lg relative">
            <Image
              src={courseImage}
              alt="Image"
              className="w-full h-full absolute inset-0 object-cover"
              width={367}
              height={190}
            />
          </div>
          <div className="flex-1 md:py-4 md:px-6 text-black p-4 line-clamp-2">
            <div
              className={` font-semibold line-clamp-2 md:text-xl md:leading-relaxed`}
            >
              Course Title
            </div>
            <div className={`line-clamp-2 mt-2 md:block hidden`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis at quam ipsum harum beatae, vel, distinctio natus,
              numquam debitis temporibus labore nihil. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Amet eos adipisci laboriosam
              dicta expedita sapiente iste molestias. Dolor ex id quos harum.
            </div>
            <div className="font-semibold mt-3">Nur Mohamamd</div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center text-sm pt-2">
                <div>20 Classes</div>
                <div>·</div>
                <div> 22 Modules</div>
              </div>
              <div className="text-lg font-semibold">৳300</div>
            </div>
            <div className="flex justify-end gap-3 mt-2 items-center">
              <Link
                className="py-2 px-4 bg-blue-300 rounded text-white"
                href={"#"}
              >
                Details
              </Link>
              <Link className="py-2 px-4 bg-main rounded text-white" href={"#"}>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularCourses;
