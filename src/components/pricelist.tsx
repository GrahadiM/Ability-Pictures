import Image from "next/image";
import React, { useState } from "react";

const priceList = [
    "/images/pricelist/price list a.png",
    "/images/pricelist/price list b.png",
    "/images/pricelist/price list c.png",
    "/images/pricelist/price list d.png",
    "/images/pricelist/price list company.png",
];

function ImageCol({ src, alt, colSpan }: { src: string, alt: string, colSpan: string }) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');
    const [popupImageIndex, setPopupImageIndex] = useState(0);

    const openPopup = (imageSrc: string, index: number) => {
        setPopupImage(imageSrc);
        setPopupImageIndex(index);
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    const previousPopupImage = () => {
        let previousIndex = popupImageIndex - 1;
        if (previousIndex < 0) previousIndex = priceList.length - 1;
        setPopupImageIndex(previousIndex);
        setPopupImage(priceList[previousIndex]);
    }

    const nextPopupImage = () => {
        let nextIndex = (popupImageIndex + 1) % priceList.length;
        setPopupImageIndex(nextIndex);
        setPopupImage(priceList[nextIndex]);
    }

    const goLeft = (event: React.KeyboardEvent<HTMLImageElement>) => {
        if (event.key === 'ArrowLeft') {
            previousPopupImage();
        }
    }

    const goRight = (event: React.KeyboardEvent<HTMLImageElement>) => {
        if (event.key === 'ArrowRight') {
            nextPopupImage();
        }
    }

    return (
        <>
            <div className={`col-span-1 ${colSpan}`}>
                <img
                    src={src}
                    alt={alt}
                    className="w-full object-cover rounded-r-3xl rounded-l-3xl cursor-pointer hover:opacity-75 hover:scale-150 transition-all duration-300"
                    onClick={() => openPopup(src, priceList.indexOf(src))}
                    onKeyDown={goLeft}
                    onKeyUp={goRight}
                    tabIndex={0}
                // loading="lazy"
                />
                {showPopup && (
                    <>
                        <div className="fixed inset-0 bg-[#000]/90 flex items-center justify-center">
                            <div className="rounded-3xl p-4 relative w-[80vw] h-[80vh]">
                                <Image src={popupImage} alt={alt} layout="fill" objectFit="contain" priority />
                                <button onClick={previousPopupImage} className="absolute top-2 right-12 text-white bg-blue-300 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={nextPopupImage} className="absolute top-2 right-2 text-white bg-blue-300 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button onClick={closePopup} className="absolute top-2 left-2 text-white bg-red-500 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
function PriceListImage() {
    return (
        <section className="bg-black py-16">
            <div className="max-w px-8 py-8 mx-auto w-full grid grid-cols-1 md:grid-cols-5">
                {priceList.map((val, index) => (
                    <>
                        <ImageCol
                            key={index}
                            src={val}
                            alt={'thumbnail'}
                            colSpan={`md:col-span-1 ${index === 1 ? 'md:col-start-3' : ''} ${index === 2 ? 'md:col-start-5' : ''} ${index === 3 ? 'md:col-start-2' : ''} ${index === 4 ? 'md:col-start-4' : ''}`}
                        />
                    </>
                ))}
            </div>
        </section>
    );
}

export default PriceListImage;
