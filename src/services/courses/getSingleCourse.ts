"use server";

export const getSingleCourse = async (id: string) => {
  const course = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses/${id}`
  );
  const { data } = await course.json();
  if (course.ok && data) {
    return data;
  } else {
    return {};
  }
};
