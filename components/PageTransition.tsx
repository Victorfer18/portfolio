"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type PagetransitionProps = {
  children: React.ReactNode;
};
const Pagetransition = (props: PagetransitionProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div key={pathName}>
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
        {props.children}
      </div>
    </AnimatePresence>
  );
};

export default Pagetransition;
