export const defaultMenu = [
  {
    path: "/",
    exact: true,
    label: "Home",
  },
  {
    path: "/login",
    exact: true,
    label: "Login",
  },
];

export const gridMenu = [
  {
    title: "Health & Fitness",
    basePath: "categories",
    links: [
      {
        path: "/diet",
        label: "Diet",
      },
      {
        path: "/foods-and-drinks",
        label: "Foods & Drinks",
      },
      {
        path: "/weight-loss",
        label: "Weight Loss",
      },
      {
        path: "/mind",
        label: "Mind",
      },
    ],
  },
  {
    title: "Technology",
    basePath: "categories",
    links: [
      {
        path: "/tutorials",
        label: "Tutorials",
      },
    ],
  },
];
