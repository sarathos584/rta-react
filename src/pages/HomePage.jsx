import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function HomePage() {
  return (
    <>
    
      <form name="myECertificatesForm" method="post" action="#">
        <div className="container">
          <Header />
          <Main />
        </div>
    
      </form>
      <div className="">
      <Footer />

      </div>
    </>
  );
}

export default HomePage;
