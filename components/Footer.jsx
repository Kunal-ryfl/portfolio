import React from 'react'
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, Variants } from "framer-motion";







const textAnimate={
  offscreen:{x:-100, opacity:0},
  onscreen:{x:0,
  opacity:1,
  transition: {type:"spring",
  bounce:0.4,
  duration:1}
}
}





const Footer = () => {
  return (
    <motion.div className='footer-container'
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{once:false, amount:0.5}}
    transition={{staggerChildren:0.5}}
    >
        
     <h2> My <span> Top </span> Skills </h2>

     <div className='foot-row'> 

     <motion.p  variants={textAnimate}>  Java </motion.p>

     </div>
     <div className='foot-row'> 

     <motion.p variants={textAnimate} >  Html/Css </motion.p>

     </div>
     <div className='foot-row'> 

     <motion.p  variants={textAnimate}>  React.js </motion.p>

     </div>
     
     <div className='foot-row'> 

     <motion.p  variants={textAnimate}>  Next.js </motion.p>

     </div>
     

      <div>
          <Button
            className="btn"
            sx={{ marginTop: 10 }}
            href="https://www.linkedin.com/in/kunal-bhardwaj-b07b87217/"
          >
            
            <LinkedInIcon />
          </Button>
          <Button
            className="btn"
            sx={{ marginTop: 10 }}
            color="error"
            href="mailto:kunalsharma070806@gmail.com"
          >
            
            <MailIcon />
          </Button>
          <Button
            className="btn"
            sx={{ marginTop: 10 }}
            color="secondary"
            href="https://github.com/Kunal-ryfl"
          >
 
            <GitHubIcon />
          </Button>
        </div>
         <p> Developed by Kunal Bhardwaj {'©'} 2022 </p>
         <p> Happy Coding! </p>
        </motion.div>
  )
}

export default Footer
