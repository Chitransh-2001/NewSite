"use client";
import React, { use } from "react";
import RoRBlog from "../../../../components/blogs/blogContent/RoRBlog";
import ReactNativeBlog from "../../../../components/blogs/blogContent/ReactNativeBlog";

const Page = ({ params }) => {
  const resolvedParams = use(params); // Unwrapping params from Promise

  if (resolvedParams?.slug === "ror") {
    return <RoRBlog />;
  } else if (resolvedParams?.slug === "react") {
    return <ReactNativeBlog />;
  }

};

export default Page;
