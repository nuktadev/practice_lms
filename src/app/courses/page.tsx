import { Button } from "antd";
import { getAllCourses } from "@/services/courses/getAllCourses";
import { ICourse } from "@/types/global";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import CourseSliders from "@/components/view/Home/CourseSliders";
import Image from "next/image";

const CoursesPage = async () => {
  const data = await getAllCourses([{ name: "limit", value: "20" }]);
  const courses = data?.data as ICourse[];
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl text-center font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
          Trending Courses
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link
            key={course._id}
            className="group bg-white shadow-lg rounded"
            href={`/courses/${course._id}`}
          >
            <div className="w-full h-[250px]">
              <Image
                src={course?.banner}
                alt="course"
                layout="responsive"
                height={500}
                width={800}
                className="w-full  rounded-md h-full"
              />
            </div>
            <h3 className="text-center mt-3 pb-3  uppercase group-hover:text-main text-black text-base font-poppins pt-1">
              {course.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CoursesPage;
