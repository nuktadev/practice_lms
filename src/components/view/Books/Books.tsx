import { Card, List } from "antd";
import Link from "next/link";
import Image from "next/image";
import { getAllBooks } from "@/services/books/getAllBooks";
import { IBook } from "@/types/global";
import BooksList from "./BooksList";

const Books = async () => {
  const books = await getAllBooks({ limit: 20 });
  return (
    <section className="bg-[rgb(245_252_252)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto pb-8 sm:pb-16 max-w-lg text-center">
          <h2 className="text-3xl text-black font-bold sm:text-4xl">
            All Books
          </h2>

          <p className="mt-4 text-grayBlack">
            Learn from the best of the best in the field.
          </p>
        </div>

        {<BooksList books={books?.data ? books?.data : []} />}
      </div>
    </section>
  );
};

export default Books;
