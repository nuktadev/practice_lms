import AllBooks from "@/components/view/Home/AllBooks";
import AllCourses from "@/components/view/Home/AllCourses";
import Hero from "@/components/view/Home/Hero";

const HomePage = async () => {
  return (
    <div>
      <Hero />
      <AllCourses />
      <AllBooks />
    </div>
  );
};

export default HomePage;
