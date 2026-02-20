"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
}

export function FadeInUp({
    children,
    delay = 0,
    duration = 0.5,
    distance = 20,
    ...props
}: FadeInUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom Cubic-bezier for smoother motion
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Staggered container for lists
export function StaggerFadeIn({
    children,
    staggerDelay = 0.1
}: {
    children: ReactNode,
    staggerDelay?: number
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ distance = 20 }: { distance?: number }) {
    return {
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0, transition: { ease: [0.21, 0.47, 0.32, 0.98] } }
    };
}
