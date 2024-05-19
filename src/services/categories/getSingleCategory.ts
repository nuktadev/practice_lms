"use server";

export const getSingleCategory = async (id: string) => {
  const category = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/categories/${id}`
  );
  const { data } = await category.json();
  if (category.ok && data) {
    return data;
  } else {
    return {};
  }
};
