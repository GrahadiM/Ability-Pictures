import Image from "next/image";
import Link from "next/link";
import React from "react";

const galleriesLandscape = [
    { id: 1, src: '/images/gallery/landscape/1.png' },
    { id: 2, src: '/images/gallery/landscape/2.png' },
    { id: 3, src: '/images/gallery/landscape/3.png' },
    { id: 4, src: '/images/gallery/landscape/4.png' },
    { id: 5, src: '/images/gallery/landscape/5.png' },
    { id: 6, src: '/images/gallery/landscape/6.png' },
    { id: 7, src: '/images/gallery/landscape/7.png' },
    { id: 8, src: '/images/gallery/landscape/8.png' },
];

const galleriesPotrait = [
    { id: 1, src: '/images/gallery/potrait/1.png' },
    { id: 2, src: '/images/gallery/potrait/2.png' },
    { id: 3, src: '/images/gallery/potrait/3.png' },
    { id: 4, src: '/images/gallery/potrait/4.png' },
    { id: 5, src: '/images/gallery/potrait/5.png' },
    { id: 6, src: '/images/gallery/potrait/6.png' },
    { id: 7, src: '/images/gallery/potrait/7.png' },
    { id: 8, src: '/images/gallery/potrait/8.png' },
];

function PortofolioComponent() {
    return (
        <section className="max-w-screen-2xl px-6 w-full mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {galleriesLandscape.map((gallery) => (
                    <Image
                        key={gallery.id}
                        src={gallery.src}
                        alt={`Gallery ${gallery.id}`}
                        className="rounded-lg w-full h-auto"
                        width={300}
                        height={300}
                        priority
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {galleriesPotrait.map((gallery) => (
                    <Image
                        key={gallery.id}
                        src={gallery.src}
                        alt={`Gallery ${gallery.id}`}
                        className="rounded-lg w-full h-auto"
                        width={300}
                        height={300}
                        priority
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                <video className="h-full w-full rounded-lg" controls>
                    <source src="/video/gallery/JAVA-HALU-COFFEE-FARM.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                <video className="h-full w-full rounded-lg" controls>
                    <source src="/video/gallery/Kota-Kampung-Kertas.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                <video className="h-full w-full rounded-lg" controls>
                    <source src="/video/gallery/Video-Cinematic-Coffee-shop_Ajeep-Coffee-Bekasi.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* <video className="h-full w-full rounded-lg" controls>
                    <source src="/video/gallery/Benareh-Ajeep.mp4" type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                    />
                    Your browser does not support the video tag.
                </video> */}
            </div>
        </section>
    );
}

export default PortofolioComponent;