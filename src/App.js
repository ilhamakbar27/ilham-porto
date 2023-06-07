import React from "react";
import Brands from "./component/brands";
import { Header } from "./component/header";
import Hero from "./component/hero";
import Skills from "./component/skills";
import About from "./component/about";
import Portfolio from "./component/portfolio";
import Service from "./component/service";
import Testimonial from"./component/Testimonial";
import Footer from "./component/footer";


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Service />
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
