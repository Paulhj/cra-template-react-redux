import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  margin: "20px",
  border: "5px solid black"
};

const HomePage = () => (
  <div className="jumbotron" style={divStyle}>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page. Go ahead and make this your own...</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
