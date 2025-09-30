import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[1000px] w-full mx-auto p-8"
        >
            <h1 className="text-left pb-8">Projects I've worked on</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full justify-items-center">
                <Project
                    name="Project Name"
                    description="Project description"
                    technologies={[react, tailwind]}
                />
                <Project
                    name="Project Name"
                    description="Project description"
                    technologies={[typescript, react]}
                />
                <Project
                    name="Project Name"
                    description="Project description"
                    technologies={[tailwind, react, typescript]}
                />
                <Project
                    name="Project Name"
                    description="Project description"
                    technologies={[tailwind, react]}
                />
                <Project
                    name="Project Name"
                    description="Project description"
                    technologies={[typescript]}
                />
            </div>
        </motion.div>
    );
}