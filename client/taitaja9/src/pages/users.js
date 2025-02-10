import React from "react";
import "../styles/users.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footr";
import Footer from "../components/footr";

function Users() {
  return (
    <div className="Users">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Jaro"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      <div className="Users-body"></div>
      <Footer />
    </div>
  );
}

export default Users;
