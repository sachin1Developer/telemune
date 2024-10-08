"use client"

import React, { useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect } from 'react'

export default function Reveal({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView,mainControls])

    return (
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                {children}
            </motion.div>
    )
}
