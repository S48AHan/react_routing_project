import React, { useState } from "react";
import { blogsData } from "../data";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState(blogsData);
  // console.log(blogs);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              {/* {console.log(body)} */}
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn more
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Blogs;
