"use client";
import PortofolioHero from "@/components/portofolio/hero";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function PortofolioDetail({ params }: { params: { detail: string } }) {
    const thumbnail = "/images/product/sambal-bali.png";
    const title = "Sambal Bali";
    return (
        <section className="flex flex-col min-h-screen">
            <PortofolioHero title={title} image={thumbnail} />
            <div className="max-w-screen-2xl px-6 w-full mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col gap-4 w-full">
                            <Image
                                src="/images/product/sambal-bali-1.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/sambal-bali-2.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/sambal-bali-3.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/sambal-bali-4.png"
                                alt={title}
                                width={540}
                                height={320}
                                className="w-full h-full object-cover"
                                // loading="lazy"
                                priority
                            />
                            <Image
                                src="/images/product/sambal-bali-5.png"
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
                                Sambal Matah Bali adalah saus pedas yang terbuat dari campuran cabai, bawang merah, bawang putih, terasi, gula, garam, dan air jeruk nipis. Sambal Matah Bali sangat terkenal di Indonesia dan sering digunakan sebagai pelengkap hidangan.
                            </Typography>
                            <Typography
                                placeholder=""
                                variant="lead"
                                className="capitalize font-medium text-md"
                            >
                                <span className="capitalize font-bold text-md">Client:</span> Sambal Bali <br />
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
