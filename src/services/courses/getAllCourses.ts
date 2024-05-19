"use server";

import { TQueryParam } from "@/types/global";

export const getAllCourses = async (args: any) => {
  const params = new URLSearchParams();

  if (args) {
    args.forEach((item: TQueryParam) => {
      params.append(item.name, item.value as string);
    });
  }
  const courses = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/courses?${
      params ? `${params.toString()}` : ""
    }`
  );
  const { data } = await courses.json();
  if (courses.ok && data) {
    return data;
  } else {
    return [];
  }
};
