export interface NavItemProps {
  name: string;
  href: string;
  onClick?: () => void;
  subMenu?: NavItemProps[];
}

export const NAV_MENU = [
  {
    name: "Tentang Kami",
    href: "/about",
  },
  {
    name: "Portofolio",
    href: "/portofolio",
  },
  // {
  //   name: "Layanan",
  //   href: "/services",
  //   subMenu: [
  //     {
  //       name: "Photo & Video Produk",
  //       href: "/services/photo-video-produk",
  //     },
  //     {
  //       name: "Company Profiles",
  //       href: "/services/company-profiles",
  //     },
  //   ],
  // },
  // {
  //   name: "Sub Brand",
  //   href: "/sub-brand",
  //   subMenu: [
  //     {
  //       name: "Numthai (Franchise)",
  //       href: "/sub-brand/numthai",
  //     },
  //     {
  //       name: "ability Design (Fiverr)",
  //       href: "/sub-brand/ability-design",
  //     },
  //     {
  //       name: "Helo Ruwl (Photography & Invitation)",
  //       href: "/sub-brand/helo-ruwl",
  //     },
  //   ],
  // },
  // {
  //   name: "Blog",
  //   href: "/blogs",
  // },
  {
    name: "Galeri",
    href: "/gallery",
  },
  {
    name: "Daftar Harga",
    href: "/price-list",
  },
  {
    name: "Kontak",
    href: "/contact-us",
  },
];
