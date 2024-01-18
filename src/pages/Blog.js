import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { blogsData } from "../data";

function Blog() {
  //   const [bodyData, setBodyData] = useState("");

  ///State er upor kaj kore
  const location = useLocation();
  //   console.log(location);

  ///Parameter er upor kaj kore
  const { title } = useParams();

  //   useEffect(() => {
  //     const blogData = blogsData.filter((blog) => blog.title === title);
  //     setBodyData(blogData[0].body);
  //   }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 100)}</p>
      <p>{location.state.body.slice(101, 5000)}</p>
    </div>
  );
}

export default Blog;
