import { getAllBooks } from "@/services/books/getAllBooks";
import BooksList from "./BooksList";
import SearchBox from "@/components/ui/SearchBox";
import { IBook } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import PaginationData from "@/components/ui/PaginationData";

const Books = async ({ searchParams }: { searchParams: any }) => {
  const queryString = [
    {
      name: "searchTerm",
      value: searchParams?.searchTerm || "",
    },
    {
      name: "limit",
      value: "9",
    },
    {
      name: "page",
      value: searchParams?.page || 1,
    },
  ];
  const { data, meta } = await getAllBooks(queryString);
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
        <SearchBox placeholder="Search for a book..." />
        {/* {<BooksList books={data ? data : []} />} */}

        <div className="grid grid-cols-1 py-5 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {data?.map((item: IBook) => (
            <Link
              key={item?._id}
              className="block bg-white rounded border border-gray-200 p-2 shadow-xl transition hover:border-black hover:shadow-pink-white/10"
              href="#"
            >
              <div className="w-full rounded h-[200px]">
                <Image
                  src={item?.cover_page}
                  height={500}
                  width={500}
                  alt="image"
                  className="w-full rounded h-full"
                />
              </div>

              <div className="p-2">
                <h2 className="mt-4 uppercase text-base font-semibold text-grayBlack">
                  {item?.title}
                </h2>

                <div className="flex text-base pt-2 font-medium justify-between items-center gap-2">
                  <p className="mt-1 text-sm text-grayBlack">
                    Price:{item?.price}
                  </p>
                  <p>Writer:{item?.writer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <PaginationData meta={meta} />
        </div>
      </div>
    </section>
  );
};

export default Books;
