import React from "react";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, Variants } from "framer-motion";

const textAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const Footer = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="footer-container">
        <div className="foot-top">
          <h2>
            {" "}
            My <span> Top </span> Skills{" "}
          </h2>

          <div className="foot-row">
            <motion.p variants={textAnimate}> Java </motion.p>
          </div>
          <div className="foot-row">
            <motion.p variants={textAnimate}> Html/Css </motion.p>
          </div>
          <div className="foot-row">
            <motion.p variants={textAnimate}> React.js </motion.p>
          </div>

          <div className="foot-row">
            <motion.p variants={textAnimate}> Next.js </motion.p>
          </div>
          <div className="foot-row">
            <motion.p variants={textAnimate}> Javascript </motion.p>
          </div>
        </div>

        <div className="contacts">
          <p> Developed by Kunal Bhardwaj {"©"} 2022 </p>

          <div>
            <Button
              className="btn"
              sx={{ marginTop: 2 }}
              href="https://www.linkedin.com/in/kunal-bhardwaj-b07b87217/"
            >
              <LinkedInIcon />
            </Button>
            <Button
              className="btn"
              sx={{ marginTop: 2 }}
              color="error"
              href="mailto:kunalsharma070806@gmail.com"
            >
              <MailIcon />
            </Button>
            <Button
              className="btn"
              sx={{ marginTop: 2 }}
              color="secondary"
              href="https://github.com/Kunal-ryfl"
            >
              <GitHubIcon />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
