import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Projects({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id={id} className="w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full">
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">Projects I've worked on</h3>
                    <div className="h-2 rounded-full bg-red-400 w-full"/>
                </div>
                <div className="grid grid-cols-1 px-8 py-12 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full justify-items-center">
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
        </section>
    );
}