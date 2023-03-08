export interface subheading {
  label: string;
  link: string;
}
export interface Inav1 {
  heading: string;
  link: string;
}
export interface Inav2 {
  heading: string;
  subheading: subheading[];
}

export type navfull = Inav1 | Inav2;

export const Navdata: navfull[] = [
  { heading: "Home", link: "/" },
  { heading: "News", link: "/news" },
  {
    heading: "Syllabus",
    link: "/syllabus",
  },
  {
    heading: "Question Model",
    link: "/questionmodel",
  },
  {
    heading: "Notes",

    subheading: [
      { label: "BBS first year", link: "/notes/bbsfirstyear" },
      { label: "BBS second year", link: "/notes/bbssecondyear" },
      { label: "BBS third year", link: "/notes/bbsthirdyear" },
      { label: "BBS fourth year", link: "/notes/bbsfourthyear" },
    ],
  },
  { heading: "About Us", link: "/aboutus" },
];
