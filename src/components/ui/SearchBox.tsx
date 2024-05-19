"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBox = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 1 && params.set("searchTerm", e.target.value);
    } else {
      params.delete("searchTerm");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="py-2 px-2 max-w-[350px] w-full bg-slate-100 border outline-none rounded-sm focus:ring-1 ring-slate-400"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
