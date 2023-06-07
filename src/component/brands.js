import React from "react";

import { brands, navigation } from "../data";
// import components

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary w-screen flex items-center">
      <div className="container mx-auto flex md:justify-between items-center  flex-wrap justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
