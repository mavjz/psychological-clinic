import React from 'react';
import { WrapperType } from 'types/wrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }: WrapperType) => {
    const { asPath } = useRouter();
    const variants = {
        out: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.75,
            },
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                delay: 0.5,
            },
        },
    };
    return (
        <React.Fragment>
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Transition;
