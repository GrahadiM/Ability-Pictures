import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioProps {
    title: string;
    img: string;
    href: string;
}

const portofolios: PortfolioProps[] = [
    {
        title: "Ajeep Specialty Coffee",
        img: "/images/brand-logo/ajeep.png",
        href: "/portofolio/ajeep",
    },
    {
        title: "Benareh Specialty Coffee",
        img: "/images/brand-logo/benareh.png",
        href: "/portofolio/benareh",
    },
    {
        title: "Kemenangan Andalan Kertas",
        img: "/images/brand-logo/kak.png",
        href: "/portofolio/kemengan-andalan-kemasan",
    },
    {
        title: "Kupie LON",
        img: "/images/brand-logo/kupie-lon.png",
        href: "/portofolio/kupie-lon",
    },
    {
        title: "Mattea Social Space",
        img: "/images/brand-logo/mattea.png",
        href: "/portofolio/mattea",
    },
    {
        title: "Java Halu Coffee Farm",
        img: "/images/brand-logo/jhc.png",
        href: "/portofolio/java-halu-coffe",
    },
    {
        title: "Sambal Bali",
        img: "/images/brand-logo/sambal-bali.png",
        href: "/portofolio/sambal-bali",
    },
];

function PortofolioComponent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[0].href}>
                    <div className="visible absolute bg-[#3E96DE] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-white font-extrabold">{portofolios[0].title}</p>
                        </div>
                        <Image
                            src={portofolios[0].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#3E96DE] group-hover:transition-all group-hover:duration-100">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[0].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[1].href}>
                    <div className="visible absolute bg-[#DCE0E3] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-gray-900 font-extrabold">{portofolios[1].title}</p>
                        </div>
                        <Image
                            src={portofolios[1].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#DCE0E3] group-hover:transition-all group-hover:duration-300">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[1].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[2].href}>
                    <div className="visible absolute bg-[#FFD700] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-gray-900 font-extrabold">{portofolios[2].title}</p>
                        </div>
                        <Image
                            src={portofolios[2].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#FFD700] group-hover:transition-all group-hover:duration-300">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[2].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[3].href}>
                    <div className="visible absolute bg-[#363845] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-white font-extrabold">{portofolios[3].title}</p>
                        </div>
                        <Image
                            src={portofolios[3].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#363845] group-hover:transition-all group-hover:duration-300">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[3].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[4].href}>
                    <div className="visible absolute bg-[#CB3E42] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-white font-extrabold">{portofolios[4].title}</p>
                        </div>
                        <Image
                            src={portofolios[4].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#CB3E42] group-hover:transition-all group-hover:duration-300">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[4].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-span-1">
                <Link className="relative block bg-gray-900 group" href={portofolios[5].href}>
                    <div className="visible absolute bg-[#FC9300] inset-0 w-full group-hover:opacity-50 group-hover/item:invisible grid grid-cols-3 content-end p-4">
                        <div className="col-span-2 flex items-end">
                            <p className="text-3xl text-white font-extrabold">{portofolios[5].title}</p>
                        </div>
                        <Image
                            src={portofolios[5].img}
                            alt="logo"
                            width={300}
                            height={300}
                            className="col-span-1 rounded-full"
                        />
                    </div>
                    <div className="relative h-[600px] p-10 group-hover:bg-[#FC9300] group-hover:transition-all group-hover:duration-300">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                <Image
                                    width={900}
                                    height={900}
                                    src={portofolios[5].img}
                                    alt="bg"
                                    className="group-hover:w-full group-hover:object-cover group-hover:object-center group-hover:transition-all group-hover:duration-300 group-hover:overflow-hidden"
                                    // loading="lazy"
                                    priority
                                />
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </Link>
            </div>
            {/* <div className="col-span-1">
                <Link href={portofolios[0].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[0].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div>
            <div className="col-span-1">
                <Link href={portofolios[1].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[1].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div>
            <div className="col-span-1">
                <Link href={portofolios[2].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[2].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div>
            <div className="col-span-1">
                <Link href={portofolios[3].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[3].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div>
            <div className="col-span-1">
                <Link href={portofolios[4].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[4].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div>
            <div className="col-span-1">
                <Link href={portofolios[5].href}>
                    <Image
                        width={768}
                        height={768}
                        src={portofolios[5].img}
                        alt="bg"
                        className="h-[600px] w-full object-cover object-center transition-all duration-300 overflow-hidden hover:scale-110"
                        // loading="lazy"
                        priority
                    />
                </Link>
            </div> */}
        </div>
    );
}

export default PortofolioComponent;
