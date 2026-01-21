  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import Layout from "./components/Layout";
  // import Login from "./pages/Auth/Login";
  // import Register from "./pages/Auth/Register";
  // import ProtectedRoute from "./context/ProtectedRoute";

  // function App() {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/profile" element={<Profile />} />
  //         <Route element={<ProtectedRoute />}>
  //         <Route path="/" element={<Layout />}>
  //           <Route path="/contactlist" element={<ContactList />} />
  //           <Route path="/addcontact" element={<AddContact />} />
  //           <Route path="/contacts/edit/:id" element={<EditContact />} />
  //           <Route path="/facultylist" element={<FacultyList />} />
  //           <Route path="/addfaculty" element={<AddFaculty />} />
  //           <Route path="/faculty/edit/:id" element={<EditFaculty />} />
  //           <Route path="/studentlist" element={<StudentList />} />
  //           <Route path="/addstudent" element={<AddStudent />} />
  //           <Route path="/student/edit/:id" element={<EditStudent />} />
  //           </Route></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }

  // export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Sample pages
const Home = () => (
  <div className="text-center">
    <h1>Welcome to My Website</h1>
    <p className="lead">This is a simple landing page built with React & Bootstrap.</p>
  </div>
);

const About = () => (
  <div className="text-center">
    <h1>About Us</h1>
    <p>We build modern web applications.</p>
  </div>
);

const Blog = () => (
  <div className="text-center">
    <h1>Blog</h1>
    <p>Latest news and updates.</p>
  </div>
); 

const News = () => (
  <div className="text-center">
    <h1>News</h1>
    <p>Latest news and updates.</p>
  </div>
);

const Login = () => (
  <div className="row justify-content-center">
    <div className="col-md-4">
      <h2 className="mb-3">Login</h2>
      <input className="form-control mb-2" placeholder="Email" />
      <input className="form-control mb-2" type="password" placeholder="Password" />
      <button className="btn btn-primary w-100">Login</button>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
