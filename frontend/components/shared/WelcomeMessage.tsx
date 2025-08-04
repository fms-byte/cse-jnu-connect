"use client"

import {motion} from "motion/react"
import React from "react";

export default function WelcomeMessage() {
    return (<motion.div animate={{
        rotate: 360,

    }}
                        transition={{
                            delay: 1,
                        }}
    >
        <h1 className='text-4xl font-bold'>Welcome to CSE-JNU Connect</h1>
        <p className='text-lg mt-4'>A community platform for CSE-JNU students!</p>
    </motion.div>)
}