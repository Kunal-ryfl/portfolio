import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion"

const Spring = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  return (
    <motion.div className='spring' style={{ scaleX }} >
        
        </motion.div>
  )
}

export default Spring