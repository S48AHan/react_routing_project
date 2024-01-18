import React, { useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
function User() {
  //   const { userId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  ///querySelector
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("id"));
  //   const id = searchParams.get("id");
  //   const age = searchParams.get("age");
  //   const sex = searchParams.get("sex");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name });
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <h2>Set Users</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* <h4>{id}</h4>
      <h4>{age}</h4>
      <h4>{sex}</h4> */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        goto home
      </button>
    </div>
  );
}

export default User;
