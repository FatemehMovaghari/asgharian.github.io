"use client";

import "../globals.css";
import { motion } from "framer-motion";
import styles from "./Navigation.module.css";

const menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function Navigation() {
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="col-span-2"
    >
      <div className={styles.menu}>
        {menuItems.map((item) => (
          <motion.div
            key={item}
            variants={itemVariants} // this controls both text and line!
            className={styles.menuItemWrapper}
          >
            {/* Bullet */}
            <div className={styles.bullet} />

            {/* Line and Text */}
            <div className={styles.lineContainer}>
              {/* Text above line */}
              <div className={styles.menuItemText}>{item}</div>

              {/* Animated Line */}
              <motion.div className={styles.line} variants={lineVariants} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}
