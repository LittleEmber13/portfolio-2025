import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import flutter from "../assets/icons/flutter.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

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
                        name="KeepassUX"
                        description="Password manager built using the open-source KeePass library"
                        technologies={[flutter]}
                    />
                    <Project
                        name="UGC Database"
                        description="Platform that helps agencies find and hire content creators for advertising through advanced search and filtering."
                        technologies={[typescript, nextjs, tailwind]}
                    />
                    <Project
                        name="Berrly"
                        description="Management system for clubs, associations, and foundations, including event organization and ticket management"
                        technologies={[flutter]}
                    />
                    <Project
                        name="Bovidata"
                        description="Livestock management system with features for health tracking, inventory management, expense tracking, and more"
                        technologies={[flutter, firebase]}
                    />
                                 <Project
                        name="Porfolio"
                        description="The current portfolio. You can explore the code in more detail here"
                        technologies={[react, javascript, framerMotion, tailwind]}
                    />
                </div>
            </motion.div>
        </section>
    );
}