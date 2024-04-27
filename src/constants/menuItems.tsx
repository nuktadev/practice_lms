import Link from "next/link";

export const menuItems = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
  },
  {
    label: "Courses",
    key: "SubMenu",
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href="/বি.সি.এস">বি.সি.এস</Link>,
            children: [
              {
                key: "bangla",
                label: <Link href="/bangla">ব্যাংক</Link>,
              },
            ],
          },
          {
            key: "bank",
            label: <Link href="/bangla">ব্যাংক</Link>,
          },
          {
            key: "primary",
            label: <Link href="/english">প্রাইমারি</Link>,
          },
          {
            key: "ntrca",
            label: <Link href="/english">এন.টি.আর.সি.এ</Link>,
          },
        ],
      },
    ],
  },
  {
    label: <Link href="/books">Books</Link>,
    key: "books",
  },

  {
    label: <Link href="/">Log In</Link>,
    key: "login",
  },
];
