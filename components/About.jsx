import React, { useEffect, useRef, useState } from "react";
import { Button, duration } from "@mui/material";
import { useViewportScroll, useScroll,useTransform , motion,useMotionValue } from "framer-motion";
import Particlebg from "./Particlebg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};




const About = () => {
  const x = useMotionValue(0);
  // const { scrollYProgress } = useViewportScroll();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 0.5]);
  const f1 = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [-400,1270]
  )
  const f2 = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [400, -1270]
  )

  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Particlebg />
      
          <motion.h1  
    initial={{y:100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.7,type:'spring'}}
          >
            Hi, I&apos;m
            <motion.span
              className="about-name"
            >
            {" "}   Kunal
          
            </motion.span>
          </motion.h1>
          <motion.h1 
  initial={{y:100,opacity:0}}
  animate={{y:0,opacity:1}}
  transition={{duration:0.5,type:'spring'}}
          > A Front-End Web Developer </motion.h1>
         

        <div>
          <Button
            className="btn"
            sx={{ marginTop: 10 }}
            href="https://drive.google.com/file/d/10PgP-gsK0DUkA1EINQ-2VdWRUGLSXmPr/view?usp=sharing"
            variant="outlined"
            startIcon={<FileOpenIcon />}
          >
            Resume
          </Button>
        </div>

        {/* <motion.div
          className="arrow"
          initial={{ y: -30, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {" "}
          <a href="#intro">  
          <KeyboardArrowDownIcon />{" "}</a>
        </motion.div> */}
      </motion.div>

      <motion.div
         id='intro'
        className="intro"
        // initial={"offscreen"}
        // whileInView={"onscreen"}
        // viewport={{ once: false, amount: 0.5 }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1 style={{x:f1}}
       
        // variants={textAnimate}
        >
          
          I&apos;m a <span > Computer Science</span> student.
        </motion.h1>
        <motion.h1 
        // variants={textAnimate}
        >
          
          I build things for <span> web</span>.
        </motion.h1>
        <motion.h1 
          style={{x:f2}}
        // variants={textAnimate}
        >
                    I also love <span>competitive programming</span>.
        </motion.h1>
      </motion.div>

      <div className="skill-container">
        <motion.div className="skill">
          <div className="skill-left">
            <h2> Here is </h2>
            <h1> What i have built </h1>
          </div>

          <motion.div className="skill-right"
           
           >
            <motion.div
              className="card"
              initial={"offscreen"}
              whileInView={"onscreen"}
              // viewport={{once:false, amount:0.5}}
              // transition={{ staggerChildren: 1 }}
            >
              <a href="https://sigma-shop.vercel.app/">
                <motion.img
                  className="card-img"
                  src="Screenshot_s1.jpg"
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                  
            
                  />
              </a>
              <a href="https://sigma-shop.vercel.app/">
                <motion.img
                  className="card-img2"
                  src="Screenshot (25).png"
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                 
               
                  />{" "}
              </a>
              <motion.h3 > Sigma </motion.h3>
              <motion.p >
                Ecommerce demo web application <br></br>
                using NEXT.js and SANITY.io
              </motion.p>
            </motion.div>

            <motion.div
              className="card"
              initial={"offscreen"}
              whileInView={"onscreen"}
              // viewport={{once:false, amount:0.5}}
              transition={{ staggerChildren: 0.4 }}
            >
              <motion.img
                className="card-img"
                src="Screenshot_p1.jpg"
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
           
              />
              <motion.img
                className="card-img2"
                src="Screenshot (31).png"
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
             
              />
              <motion.h3 > Portfolio </motion.h3>
              <motion.p >
                Portfolio website <br /> using NEXT.js , framer motion and
                material ui.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
