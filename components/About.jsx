import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
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

const imageAnimate = {
  offscreen: { x: 0, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <>
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Particlebg />
        <motion.div
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // transition={{ type: "spring", stiffness: 400, damping: 17 }}
          transition={{ type: "spring", bounce: 0.7, duration: 1 }}
        >
          <h1>
            Hi, I&apos;m
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 5,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="about-name"
            >
              {""} Kunal
            </motion.span>
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
            href="https://drive.google.com/file/d/10PgP-gsK0DUkA1EINQ-2VdWRUGLSXmPr/view?usp=sharing"
            variant="outlined"
            startIcon={<FileOpenIcon />}
          >
            Resume
          </Button>
        </div>

        <motion.div
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
          <KeyboardArrowDownIcon />{" "}
        </motion.div>
      </motion.div>

      <motion.div
        className="intro"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.h1 variants={textAnimate}>
          {" "}
          I&apos;m a <span> Computer Science</span> student.{" "}
        </motion.h1>
        <motion.h1 variants={textAnimate}>
          {" "}
          I build things for <span> web</span>.{" "}
        </motion.h1>
        <motion.h1 variants={textAnimate}>
          {" "}
          I also love <span>competitive programming</span>.{" "}
        </motion.h1>
      </motion.div>

      <div className="skill-container">
        <motion.div className="skill">
          <div className="skill-left">
            <h2> Here is </h2>
            <h1> What i have built </h1>
          </div>

          <motion.div className="skill-right">
            <motion.div
              className="card"
              initial={"offscreen"}
              whileInView={"onscreen"}
              // viewport={{once:false, amount:0.5}}
              transition={{ staggerChildren: 0.4 }}
            >
              <a href="https://sigma-shop.vercel.app/">
                <motion.img
                  className="card-img"
                  src="Screenshot (21).png"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={imageAnimate}
                />
              </a>
              <a href="https://sigma-shop.vercel.app/">
                <motion.img
                  className="card-img2"
                  src="Screenshot (25).png"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={imageAnimate}
                />{" "}
              </a>
              <motion.h3 variants={textAnimate}> Sigma </motion.h3>
              <motion.p variants={textAnimate}>
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
                src="Screenshot (30).png"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={imageAnimate}
              />
              <motion.img
                className="card-img2"
                src="Screenshot (31).png"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={imageAnimate}
              />
              <motion.h3 variants={textAnimate}> Portfolio </motion.h3>
              <motion.p variants={textAnimate}>
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
