"use server";

export const getAllSubCategories = async (): Promise<any[]> => {
  const subCategories = await fetch(
    "https://easy-learning-platform.vercel.app/api/v1/sub-categories",
    {
      next: {
        revalidate: 24 * 60 * 60,
        tags: ["all-sub-categories"],
      },
    }
  );
  const { data } = await subCategories.json();
  if (subCategories.ok && data) {
    return data;
  } else {
    return [];
  }
};
