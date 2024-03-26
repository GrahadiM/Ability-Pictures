"use client";
import BlogCard from "@/components/blog_card";
import { blogs } from "@/data/blog_props";
import React from "react";

function BlogPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="max-w-6xl px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-36">
        {blogs.map((val, index) => (
          <BlogCard key={index} {...val} />
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
