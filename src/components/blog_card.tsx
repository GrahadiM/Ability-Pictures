"use client";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/16/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({
  title,
  img,
  date,
  comment,
}: {
  title: string;
  img: string;
  date: string;
  comment: string;
}) {
  return (
    <div className="col-span-1">
      <Link href="/">
        <div className="flex flex-col gap-6">
          <Image
            src={img}
            alt={title}
            width={800}
            height={800}
            className="w-full h-[300px] object-cover"
            // loading="lazy"
            priority
          />
          <Typography
            placeholder="title"
            className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 hover:opacity-80"
          >
            {title}
          </Typography>
          <div className="flex flex-row justify-between items-center gap-6">
            <Typography
              placeholder="title"
              className="text-sm md:text-md capitalize  text-gray-800"
            >
              {date}
            </Typography>
            <div className="flex flex-row gap-2 items-center">
              <ChatBubbleLeftEllipsisIcon width={20} height={20} color="gray" />
              <Typography
                placeholder="title"
                className="text-sm md:text-md   text-gray-800"
              >
                {comment}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
