"use client";
import "../globals.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import styles from "./VillaSVG.module.css";

export default function VillaSVG() {
  const [svgElements, setSvgElements] = useState([]);
  const rotate = useMotionValue(0);
  const rotateSpring = useSpring(rotate, { stiffness: 150, damping: 20 });

  useEffect(() => {
    fetch("/villa.svg")
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const elements = Array.from(
          doc.querySelectorAll("path, line, polyline, polygon")
        );
        setSvgElements(elements);
      })
      .catch((err) => {
        console.error("Error loading SVG:", err);
      });
  }, []);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -180, right: 180 }}
      onDrag={(event, info) => {
        rotate.set(info.offset.x / 2);
      }}
      className={styles.sketchContainer}>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "70vmin", height: "auto" }}
      >
        {svgElements.map((el, i) => {
          const tagName = el.tagName;
          const props = {};
          for (let attr of Array.from(el.attributes)) {
            props[attr.name] = attr.value;
          }

          // Map the tagName to the corresponding motion component
          let MotionTag;

          if (tagName === "path") {
            MotionTag = motion.path;
          } else if (tagName === "line") {
            MotionTag = motion.line;
          } else if (tagName === "polyline") {
            MotionTag = motion.polyline;
          } else if (tagName === "polygon") {
            MotionTag = motion.polygon;
          }

          return (
            <MotionTag
              key={i}
              {...props}
              initial={{
                pathLength: 0,
                opacity: 0.2,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              stroke={props.stroke || "#444839"}
              fill={props.fill || "none"}
              strokeWidth={props["stroke-width"] || 1}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}
