"use server";

export const getBook = async (id: string) => {
  const books = await fetch(
    `https://easy-learning-platform.vercel.app/api/v1/books/${id}`
  );
  const { data } = await books.json();
  if (books.ok && data) {
    return data;
  } else {
    return {};
  }
};
