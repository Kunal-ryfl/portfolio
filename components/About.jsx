import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import Particlebg from "./Particlebg";

const textAnimate={
  offscreen:{y:100, opacity:0},
  onscreen:{y:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}

const imageAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{
  x:0,
  opacity:1,
  rotate:[0,10,0],
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}

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
            href="https://drive.google.com/file/d/1LDsHCMWkb5Ou4zvh_orO9pfIj8heSVb5/view?usp=drivesdk"
            variant="outlined"
        
          >
            Resume
          
          </Button>
        
        </div>
      </div>

  <motion.div className="intro"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{once:false, amount:0.5}}
          transition={{staggerChildren:0.5}}
  >          
<motion.h1
    variants={textAnimate}
> I&apos;m a Computer Science student. </motion.h1> 
<motion.h1
    variants={textAnimate}
> I build things for web. </motion.h1>
<motion.h1
    variants={textAnimate}> I also love competitive programming. </motion.h1>
 
  </motion.div>

      <div className="skill-container">
        <motion.div className="skill"
                
                >
          <div className="skill-left">
            <h2> Here is </h2>
            <h1> What i have built </h1>
          </div>

          <motion.div className="skill-right"
       initial={"offscreen"}
                whileInView={"onscreen"}
                // viewport={{once:false, amount:0.5}}
                transition={{staggerChildren:0.4}}  
          >
             

             <motion.div className="card"  
          
            
             > 

             <a href="https://sigma-shop.vercel.app/">
               <motion.img className="card-img" src="Screenshot (21).png"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                         
             variants={imageAnimate}
               /></a>  
                 <a href="https://sigma-shop.vercel.app/">
               <motion.img className="card-img2" src="Screenshot (25).png"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   variants={imageAnimate}
                   />  </a>
               <motion.h3 variants={textAnimate} > Sigma </motion.h3>
               <motion.p variants={textAnimate}> 
                 Ecommerce demo web application <br></br>
                using NEXT.js and SANITY.io
               </motion.p>
             </motion.div>

             <motion.div className="card"
     
             > 
             <motion.img className="card-img" src="Screenshot (30).png"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             variants={imageAnimate}
             />
             <motion.img className="card-img2" src="Screenshot (31).png"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             variants={imageAnimate}
             />
             <motion.h3 variants={textAnimate} > Portfolio </motion.h3>
               <motion.p variants={textAnimate} >  
                  Portfolio website <br/> using NEXT.js , framer motion and material ui.
               </motion.p>
             </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
