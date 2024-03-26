"use client";
import PortofolioHero from "@/components/portofolio/hero";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function PortofolioDetail({ params }: { params: { detail: string } }) {
    const thumbnail = "/images/product/jhc/cover.png";
    const title = "Java Halu Coffee Farm";
    return (
        <section className="flex flex-col min-h-screen">
            <PortofolioHero title={title} image={thumbnail} />
            <div className="max-w-screen-2xl px-6 w-full mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col gap-4 w-full">
                            <Image
                                src="/images/product/jhc/1.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/jhc/2.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/jhc/3.png"
                                alt={title}
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
                                className="capitalize font-bold text-xl"
                            >
                                Project details
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="lead"
                                className="capitalize font-medium text-md"
                            >
                                JAVA HALU COFFEE INDONESIA Java Halu Coffee adalah Prosesor pasaca panen Kopi yang memproses hasil panen kopi dengan standar Kopi Specialty, menggunakan tekhnologi hemat air dan energi, Diproses secara Profesional oleh Q prosesor kami , Ibu Rani Mayasari untuk mewujudkan cita rasa yang unik dan berkarakter.
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="lead"
                                className="capitalize font-medium text-md"
                            >
                                <span className="capitalize font-bold text-md">Client:</span> Java Halu Coffee Farm <br />
                                <span className="capitalize font-bold text-md">Category:</span> Product <br />
                                <span className="capitalize font-bold text-md">Service:</span> Branding <br />
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortofolioDetail;
