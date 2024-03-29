"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionDivProps = MotionProps & {
  children: ReactNode;
};

export function MotionDiv({
  children,
  ...motionProps
}: Readonly<MotionDivProps>) {
  return <motion.div {...motionProps}>{children}</motion.div>;
}
