"use server";

export const getAllBooks = async ({
  limit,
}: {
  limit?: number | undefined;
}) => {
  const limitBooks = limit ? limit : 10;
  const books = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/books?limit=${limitBooks}`
  );
  const { data } = await books.json();
  if (books.ok && data) {
    return data;
  } else {
    return [];
  }
};
