import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 34,
    title: "Search",
    path: "/search",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Neighborhoods",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Summerlin",
        path: "/neighborhoods/summerlin",
        newTab: false,
      },
      {
        id: 42,
        title: "Henderson",
        path: "/neighborhoods/henderson",
        newTab: false,
      },
      {
        id: 43,
        title: "North Las Vegas",
        path: "/neighborhoods/north-las-vegas",
        newTab: false,
      },
    ],
  },
];
export default menuData;
