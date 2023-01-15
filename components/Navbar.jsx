import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        KUNAL.portfolio
      </motion.h1>
    </div>
  );
};

export default Navbar;
