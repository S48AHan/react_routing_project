import React from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        quidem nemo numquam aut ut? Eius, voluptatibus, nihil maxime, repellat
        illo quia porro nulla autem repudiandae voluptas molestiae ad culpa
        consectetur?{" "}
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
        repudiandae neque aliquam id distinctio. Quia explicabo nulla laborum
        fuga? Quia ut quos rerum minima consequatur ea corrupti esse similique,
        sed incidunt provident possimus quisquam asperiores illum dignissimos
        debitis. Officia repudiandae voluptas nihil et, culpa provident alias
        tenetur facilis laboriosam sed!
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
      <button
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Go to Blogs
      </button>
    </div>
  );
}

export default Contact;
