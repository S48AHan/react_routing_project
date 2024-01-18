// import Home from "./pages/Home";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./pages/Contact";
// import Blogs from "./pages/Blogs";
// import Error from "./pages/Error";
// import NavBar from "./Components/NavBar";
// import Blog from "./pages/Blog";
// import User from "./pages/User";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/blogs/:title" element={<Blog />} />
//         <Route path="/users" element={<User />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//   /home => <Home/>
//   /contact => <Contact /

////

import React from "react";
import Index from "./routes/Index";
import "./App.css";
function App() {
  return (
    <div>
      <Index />
    </div>
  );
}

export default App;
