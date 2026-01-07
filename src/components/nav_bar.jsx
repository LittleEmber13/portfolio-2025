import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const content = show ? (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex bg-[var(--color-surface)] p-2 gap-4 rounded-full px-8 fixed z-10 mt-4"
        >
            <a href="#welcome" className="cursor-pointer">Welcome</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#contact" className="cursor-pointer">Contact</a>
        </motion.div>
    ) : null;

    return (
        <AnimatePresence>
            {content}
        </AnimatePresence>
    );
}
