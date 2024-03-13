import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
