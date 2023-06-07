import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";
import { TypeAnimation } from "react-type-animation";
// import Marquee from "react-fast-marquee";
// import App from "./Nav";

import ManImg1 from "../assets/img/hero1.png";
import Brands from "./brands";
// import components

const hero = () => {
  return (
    <>
    
    
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <TypeAnimation
              className="text-2xl lg:text-3xl text-accent text-md mb-[40px]"
              sequence={[
                "Hey! 👋", // Types 'One'
                1000, // Waits 1s
                "My Name's Ilham", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
            <motion.h1
              className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              I love coding & <br />
              Learning React.
            </motion.h1>
            <motion.p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.7, duration: 0.8 }}
                     variants={{
                       hidden: { opacity: 0, scale: 0.8 },
                       visible: { opacity: 1, scale: 1 },
                     }}>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </motion.p>
            <motion.button className="btn btn-md rounded-xl bg-accent hover:bg-secondary-hover md:btn-lg transition-all"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.8, duration: 0.8 }}
                     variants={{
                       hidden: { opacity: 0, scale: 0.8 },
                       visible: { opacity: 1, scale: 1 },
                     }}>
              Work with me
            </motion.button>
          </div>
          <motion.div
            className="hidden lg:flex flex-1 justify-end items-end h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={ManImg1} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
    <div>
      <Brands/>
    </div>
    </>
   
    // <section className="lg:h[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden  ">
    //   <div className="container mx-auto">hero</div>`
    // </section>
  );
};

export default hero;
