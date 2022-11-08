import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import Particlebg from "./Particlebg";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="about-container" ref={ref}>
        <Particlebg />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <h1>
            Hi, I&apos;m 
            <span
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="about-name"
            >
             {""} Kunal
            </span>
          </h1>
          <h1> A Front-End Web Developer </h1>
          <p>
            
            I&apos; ve great interest in frontend development and competitive
            programming.
          </p>
        </motion.div>

        <div>
          <Button
            className="btn"
            sx={{ marginTop: 10 }}
            href="https://drive.google.com/file/d/1LDsHCMWkb5Ou4zvh_orO9pfIj8heSVb5/view"
            variant="outlined"
        
          >
            Resume
          
          </Button>
        
        </div>
      </div>

  <div className="intro">

<h1> I&apos;m a Computer Science student. </h1>
<h1> I build things for web. </h1>
<h1> I also love competitive programming. </h1>
  
  </div>

      <div className="skill-container">
        <div className="skill">
          <div className="skill-left">
            <h2> Here is </h2>
            <h1> What i have built </h1>
          </div>

          <motion.div className="skill-right"
          >
             

             <motion.div className="card" variants={cardVariants}> 

             <a href="https://sigma-shop.vercel.app/">
               <motion.img className="card-img" src="Screenshot (21).png"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
               /></a>  
                 <a href="https://sigma-shop.vercel.app/">
               <motion.img className="card-img2" src="Screenshot (25).png"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}/>  </a>
               <h3> Sigma </h3>
               <p> 
                 Ecommerce demo web application <br></br>
                using NEXT.js and SANITY.io
               </p>
             </motion.div>

             <div className="card"> 
             <motion.img className="card-img" src="Screenshot (30).png"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}/>
             <motion.img className="card-img2" src="Screenshot (31).png"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}/>
             <h3> Portfolio </h3>
               <p> 
                  Portfolio website <br/> using NEXT.js , framer motion and material ui.
               </p>
             </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
