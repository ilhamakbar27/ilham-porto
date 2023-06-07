import { motion } from "framer-motion";
import React from "react";
import Projects from "./projects";

// import components
// import Projects from ".component/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <motion.div className="flex flex-col items-center text-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, y: 50 },
                   visible: { opacity: 1, y: 0 },
                 }}>
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest work
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </motion.div>
     <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
