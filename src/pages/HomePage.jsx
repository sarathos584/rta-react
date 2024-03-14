import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function HomePage() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />

      </div>

      <Footer />

    </>
  );
}

export default HomePage;
