import React, { Fragment, useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Dev from "./components/Dev";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Main />
        <About />
        <Dev />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
