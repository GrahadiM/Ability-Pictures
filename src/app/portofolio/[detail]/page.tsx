"use client";
import PortofolioHero from "@/components/portofolio/hero";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function PortofolioDetail({ params }: { params: { detail: string } }) {
    return (
        <section className="flex flex-col min-h-screen">
            <PortofolioHero title={params.detail.replaceAll("-", " ")} />
            <div className="max-w-5xl px-6 w-full mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col gap-4 w-full">
                            <Image
                                src="/images/home/hero2.jpg"
                                alt="image"
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/home/hero2.jpg"
                                alt="image"
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="sticky top-20 flex flex-col gap-8">
                            <Typography
                                placeholder=""
                                variant="lead"
                                className="capitalize font-medium text-xl"
                            >
                                Project details
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortofolioDetail;
