"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const customers = [
    { id: 1, name: 'Ajeep Specialty Coffee' },
    { id: 2, name: 'Benareh Specialty Coffee' },
    { id: 3, name: 'Kupie LON' },
    { id: 4, name: 'Mattea Social Space' },
    { id: 5, name: 'ICDX Group' },
    { id: 6, name: 'Java Halu Coffee' },
    { id: 7, name: 'PT. Kemenangan Andalan Kertas' },
    { id: 8, name: 'PT. KPTI' },
    { id: 9, name: 'PT. Nusantara Power' },
    { id: 10, name: 'Sambal Bali' },
    { id: 11, name: 'Pavoni Specialty Coffee' },
    { id: 12, name: 'Karra`Co' },
    { id: 13, name: 'Mangga Sruput' },
    { id: 14, name: 'Scarlet Whitening' },
    { id: 15, name: 'MT Riyadussolihin' },
    { id: 16, name: 'Himpunan Pengusaha Muda Indonesia' },
]

function ClientComponent({ withButton: withButton = true }) {
    return (
        <section className="bg-gray-900">
            <div className="max-w-7xl w-full mx-auto pt-16 px-6 py-16">
                <div className="flex flex-col md:text-left text-center md:items-start items-center gap-8">
                    <Typography
                        placeholder="title-about"
                        variant="h1"
                        className="text-white"
                    >
                        Daftar Pelanggan Kami
                    </Typography>
                    <ul role="list" className="grid grid-cols-1 md:grid-cols-4 space-y-4 text-gray-500 dark:text-gray-400 gap-x-4 gap-y-1">
                        {customers.map((customer) => (
                            <li key={customer.id} className="col-span-1 flex space-x-2 rtl:space-x-reverse items-center">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-white font-semibold">{customer.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default ClientComponent;
