import AllBooks from "@/components/view/Home/AllBooks";
import AllCourses from "@/components/view/Home/AllCourses";
import Hero from "@/components/view/Home/Hero";
import PopularCourses from "@/components/view/Home/PopularCourses";
import Quatation from "@/components/view/Home/Quatation";

const HomePage = async () => {
  return (
    <div>
      <Hero />
      <AllCourses />
      <AllBooks />
      <PopularCourses />
      <Quatation />
    </div>
  );
};

export default HomePage;
