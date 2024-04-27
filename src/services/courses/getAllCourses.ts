"use server";

import { ICourse } from "@/types/global";

export const getAllCourses = async ({ limit }: { limit?: number }) => {
  const limitCourse = limit ? limit : 20;
  const courses = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?limit=${limitCourse}`
  );
  const { data } = await courses.json();
  if (courses.ok && data) {
    return data;
  } else {
    return [];
  }
};
