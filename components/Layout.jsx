import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Spring from "./Spring";

import Particlebg from "./Particlebg";
const Layout = () => {
  return (
    <>
    <Spring/>
      <header>
        <Navbar />
      </header>

      <main>  
        <About />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
