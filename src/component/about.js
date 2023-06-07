import { motion } from "framer-motion";
import React from "react";

import manPhoto from "../assets/img/about1.jpeg";
// import components

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <motion.img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            src={manPhoto}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <motion.h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.4, duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 },
                   }}>
                Ilham Akbar
              </motion.h2>
              <motion.p className="mb-4 text-accent"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.7, duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, y: -50 },
                     visible: { opacity: 1, y: 0 },
                   }}>
                Freelance Frontend Web Developer
              </motion.p>
              <hr className="mb-8 opacity-5" />
              <motion.p className="mb-8"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.9, duration: 0.5 }}
                   variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 },
                   }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </motion.p>
            </div>
            <motion.button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: -50 },
                   visible: { opacity: 1, x: 0 },
                 }}>
              Contact me
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
