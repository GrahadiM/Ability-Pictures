"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "./sidebar";
import { NAV_MENU, NavItemProps } from "@/data/navbar_props";

function Navbar() {
  const pathName = usePathname();
  const ref = useRef<HTMLInputElement>(null);

  const [topOffset, setTopOffset] = useState(50);

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref?.current?.getBoundingClientRect();

    setTopOffset(rect?.top || 0);

    const handleScroll = () => {
      if (window.scrollY > topOffset - rect?.height * 0.5) {
        setShowBackground(true);
      } else if (window.scrollY < topOffset) {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [topOffset]);

  return (
    <header
      ref={ref}
      className={`${showBackground || pathName.includes("blog")
        ? "bg-[#2b2c36]"
        : "bg-transparent pt-10"
        } w-full top-0 z-50 transition-all fixed duration-300 px-12 py-1`}
    >
      <div className="flex flex-row justify-between gap-4 items-center lg:p-1 p-2">
        <Link href="/" className="w-20">
          <Image
            src={
              showBackground
                ? "/images/icons/icon.png"
                : "/images/icons/ability.png"
            }
            alt="Ability Pictures"
            width={showBackground ? 60 : 80}
            height={100}
            className="object-contain max-w-xs"
            // loading="lazy"
            priority
          />
        </Link>

        <ul className="lg:flex flex-row gap-4 hidden">
          {NAV_MENU.map((val, index) => (
            <NavItem key={index} {...val} />
          ))}
        </ul>

        <ul className="lg:flex flex-row gap-4 hidden">
          <li>
            <a
              href="https://www.youtube.com/@abilitypictures"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
              target="_blank"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@abilitypictures.official?_t=8k89cB1ss4o&_r=1"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
              target="_blank"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/abilitypictures.id"
              className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
              target="_blank"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 5.19316C7.33984 5.19316 5.19296 7.34004 5.19296 10.0002C5.19296 12.6604 7.33984 14.8072 9.99999 14.8072C12.6602 14.8072 14.807 12.6604 14.807 10.0002C14.807 7.34004 12.6602 5.19316 9.99999 5.19316ZM9.99999 13.1244C8.27968 13.1244 6.87578 11.7205 6.87578 10.0002C6.87578 8.27988 8.27968 6.87598 9.99999 6.87598C11.7203 6.87598 13.1242 8.27988 13.1242 10.0002C13.1242 11.7205 11.7203 13.1244 9.99999 13.1244ZM15.0039 3.87598C14.3828 3.87598 13.8812 4.37754 13.8812 4.99863C13.8812 5.61973 14.3828 6.12129 15.0039 6.12129C15.625 6.12129 16.1266 5.62207 16.1266 4.99863C16.1242 4.3752 15.625 3.87598 15.0039 3.87598Z"
                  fill="#fff"
                />
                <path
                  d="M19.3703 10C19.3703 8.70626 19.382 7.42423 19.3094 6.13283C19.2367 4.63283 18.8945 3.30158 17.7976 2.2047C16.6984 1.10548 15.3695 0.765639 13.8695 0.692982C12.5758 0.620326 11.2937 0.632045 10.0023 0.632045C8.70858 0.632045 7.42655 0.620326 6.13515 0.692982C4.63515 0.765639 3.3039 1.10783 2.20702 2.2047C1.1078 3.30392 0.767958 4.63283 0.695302 6.13283C0.622645 7.42658 0.634364 8.70861 0.634364 10C0.634364 11.2914 0.622645 12.5758 0.695302 13.8672C0.767958 15.3672 1.11015 16.6985 2.20702 17.7953C3.30624 18.8945 4.63515 19.2344 6.13515 19.307C7.4289 19.3797 8.71093 19.368 10.0023 19.368C11.2961 19.368 12.5781 19.3797 13.8695 19.307C15.3695 19.2344 16.7008 18.8922 17.7976 17.7953C18.8969 16.6961 19.2367 15.3672 19.3094 13.8672C19.3844 12.5758 19.3703 11.2938 19.3703 10ZM17.3078 15.5266C17.1367 15.9531 16.9305 16.2719 16.6 16.6C16.2695 16.9305 15.9531 17.1367 15.5266 17.3078C14.2937 17.7977 11.3664 17.6875 9.99999 17.6875C8.63358 17.6875 5.7039 17.7977 4.47108 17.3102C4.04452 17.1391 3.72577 16.9328 3.39765 16.6024C3.06718 16.2719 2.86093 15.9555 2.68983 15.5289C2.20233 14.2938 2.31249 11.3664 2.31249 10C2.31249 8.63361 2.20233 5.70392 2.68983 4.47111C2.86093 4.04454 3.06718 3.72579 3.39765 3.39767C3.72811 3.06954 4.04452 2.86095 4.47108 2.68986C5.7039 2.20236 8.63358 2.31251 9.99999 2.31251C11.3664 2.31251 14.2961 2.20236 15.5289 2.68986C15.9555 2.86095 16.2742 3.0672 16.6023 3.39767C16.9328 3.72814 17.1391 4.04454 17.3101 4.47111C17.7976 5.70392 17.6875 8.63361 17.6875 10C17.6875 11.3664 17.7976 14.2938 17.3078 15.5266Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          <Sidebar />
        </div>
      </div>
    </header>
  );
}

export function NavItem({ name, href, subMenu }: NavItemProps) {
  const pathName = usePathname();

  const isActive = () => pathName.includes(href);

  return (
    <li>
      {subMenu ? (
        <div className="group relative cursor-pointer">
          <Link
            href={href}
            className={`${isActive()
              ? "text-[#FFD700] lg:shadow-none shadow-md bg-white lg:bg-transparent capitalize"
              : "text-gray-800 lg:text-white border-transparent opacity-80 capitalize"
              } flex items-center gap-2 p-2 text-xl hover:text-[#FFD700] hover:opacity-60 hover:shadow-lg lg:hover:shadow-none lg:hover:bg-transparent transition-all duration-500 `}
          >
            <span>{name}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentcolor"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Link>
          <div className="invisible absolute z-50 flex w-full flex-col bg-[#2b2c36] py-1 px-4 text-white shadow-xl group-hover:visible">
            {subMenu.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="py-2 hover:text-[#FFD700] transition-colors duration-300 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          href={href}
          className={`${isActive()
            ? "text-[#FFD700] lg:shadow-none shadow-md bg-white lg:bg-transparent"
            : " text-gray-800 lg:text-white border-transparent opacity-80"
            } flex items-center gap-2 p-2 text-xl  hover:text-[#FFD700] hover:opacity-60 hover:shadow-lg lg:hover:shadow-none lg:hover:bg-transparent transition-all duration-500 `}
        >
          {name}
        </Link>
      )}
    </li>
  );
}

export default Navbar;
