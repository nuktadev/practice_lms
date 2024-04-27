"use server";

export const getAllCategories = async (): Promise<any[]> => {
  const categories = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/categories",
    {
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["all-courses"],
      },
    }
  );
  const { data } = await categories.json();
  if (categories.ok && data) {
    return data;
  } else {
    return [];
  }
};
