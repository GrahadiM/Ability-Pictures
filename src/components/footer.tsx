"use client";

import { NAV_MENU } from "@/data/navbar_props";
import { Typography } from "@material-tailwind/react";
import { NavItem } from "./navbar";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex text-[#9698a3] bg-[#2b2c36] px-12 py-16 w-full flex-col lg:flex-row items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
            <div className="flex flex-col gap-4 items-center lg:items-start w-full">
                <Link href="/">
                    <Image
                        src="/images/icons/icon.png"
                        width={80}
                        height={80}
                        alt="logo"
                        // loading="lazy"
                        priority
                    />
                </Link>
                <Typography placeholder="footer" className="font-normal">
                    &copy; 2020 - {currentYear}  Ability Pictures. All Right Reserved
                </Typography>
            </div>

            <div className="flex flex-col gap-8 items-center lg:items-end w-full">
                <ul className="flex flex-row gap-x-4">
                    <li>
                        <a
                            target="_blank"
                            href="https://www.youtube.com/@abilitypictures"
                            className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
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
                            target="_blank"
                            href="https://www.tiktok.com/@abilitypictures.official?_t=8k89cB1ss4o&_r=1"
                            className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
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
                            target="_blank"
                            href="https://www.instagram.com/abilitypictures.id"
                            className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100"
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

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    {NAV_MENU.map((val, index) => (
                        <li key={index}>
                            <Link
                                href={val.href}
                                className=" border-transparent items-center font-bold hover:text-[#FFD700] transition-all duration-500"
                            >
                                {val.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
