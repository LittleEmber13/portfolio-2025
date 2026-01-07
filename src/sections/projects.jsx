import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import flutter from "../assets/icons/flutter.png";
import ugcdatabase from "../assets/projects/ugcdatabase.png";
import berrly from "../assets/projects/berrly.png";
import bovidata from "../assets/projects/bovidata.png";
import portfolio from "../assets/projects/portfolio.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { GITHUB_LINK } from '../constants.jsx';

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
                className="w-full pt-8">
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">Projects</h3>
                    <div className="h-2 rounded-full bg-[var(--color-surface)] w-full" />
                </div>
                <div className="px-8 py-12 w-full">
                    <div className="columns-1 md:columns-2 gap-12 space-y-12">
                        <div>
                            <h2>Projects I've worked on</h2>
                            <br />
                            <p className="text-[var(--color-body)]">Here are some of the projects I’ve worked on, including both personal and professional projects.</p>
                            <br />
                            <p className="text-[var(--color-body)]">
                                You can see more of my work on my{" "}
                                <a
                                    href={GITHUB_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub
                                </a>
                            </p>
                        </div>
                        <Project
                            name="KeepassUX"
                            openSource={true}
                            description="Password manager built using the open-source KeePass library"
                            technologies={[flutter]}
                            githubUrl={"https://github.com/LittleEmber13/keepassUX"}
                        />
                        <Project
                            name="Porfolio"
                            openSource={true}
                            image={portfolio}
                            description="The current portfolio. You can explore the code in more detail here"
                            technologies={[react, javascript, framerMotion, tailwind]}
                            githubUrl={"https://github.com/LittleEmber13/portfolio-2025"}
                        />
                        <Project
                            name="UGC Database"
                            openSource={false}
                            image={ugcdatabase}
                            description="Platform that helps agencies find and hire content creators for advertising through advanced search and filtering."
                            technologies={[typescript, nextjs, tailwind]}
                        />
                        <Project
                            name="Berrly"
                            openSource={false}
                            image={berrly}
                            description="Management system for clubs, associations, and foundations, including event organization and ticket management"
                            technologies={[flutter]}
                        />
                        <Project
                            name="Bovidata"
                            openSource={false}
                            image={bovidata}
                            description="Livestock management system with features for health tracking, inventory management, expense tracking, and more"
                            technologies={[flutter, firebase]}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}