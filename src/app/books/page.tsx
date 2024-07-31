import Books from "@/components/view/Books/Books";
import React from "react";

const BooksPage = ({ searchParams }: { searchParams: any }) => {
  return (
    <div className="bg-[#f9f9fa]">
      <Books searchParams={searchParams} />
    </div>
  );
};

export default BooksPage;
