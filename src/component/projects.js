import React, { useEffect, useState } from "react";
import Project from "./project";
//  useEffect useState
// import data
import { projectsData } from "../data";
import { projectsNav } from "../data";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* projects nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <motion.ul className="flex flex-col md:flex-row justify-evenly items-center text-white"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ delay: 0.3, duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, y: 50 },
                   visible: { opacity: 1, y: 0 },
                 }}>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </motion.ul>
      </nav>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
// const Projects = () => {
//   return <div>
//     <Project/>
//   </div>;
// };

// export default Projects;
