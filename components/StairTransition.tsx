"use client";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";
import { motion } from "framer-motion";

const StairTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                duration: 0.4,
                delay: 1,
                ease: "easeInOut",
              },
            }}
            className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
