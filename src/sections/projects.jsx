import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import flutter from "../assets/icons/flutter.png";
import ugcdatabase from "../assets/projects/ugcdatabase.png";
import berrly from "../assets/projects/berrly.png";
import bovidata from "../assets/projects/bovidata.png";
import keepassux from "../assets/projects/keepassux.png";
import portfolio from "../assets/projects/portfolio.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { GITHUB_LINK } from '../constants.jsx';
import { useTranslation } from 'react-i18next';

export default function Projects({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { t } = useTranslation();

    return (
        <section id={id} className="w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full pt-8">
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap gradient-primary-text">{'<'+t('projects.heading')+'/>'}</h3>
                    <div className="h-2 rounded-full gradient-section w-full" />
                </div>
                <div className="px-8 py-12 w-full">
                    <div className="columns-1 md:columns-2 gap-12 space-y-12">
                        <div>
                            <motion.div initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{
                                    duration: 0.5, ease: "easeOut", delay: 0.5
                                }} >
                                <h2>{t('projects.subheading')}</h2>
                            </motion.div>
                            <br />
                            <motion.div initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 1, ease: "easeOut", delay: 0.7
                                }} >
                                <p className="text-[var(--color-body)]">{t('projects.description')}</p>
                                <br />
                                <p className="text-[var(--color-body)]">
                                    {t('projects.see_more')}{" "}
                                    <a
                                        href={GITHUB_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--color-primary)] hover:underline"
                                    >
                                        {t('projects.github')}
                                    </a>
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                            className="w-full pt-8">
                            <Project
                                name={t('projects.items.keepassux.name')}
                                openSource={true}
                                image={keepassux}
                                description={t('projects.items.keepassux.description')}
                                technologies={[flutter]}
                                githubUrl={"https://github.com/LittleEmber13/keepassUX"}
                            />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
                            className="w-full pt-8">
                            <Project
                                name={t('projects.items.portfolio.name')}
                                openSource={true}
                                image={portfolio}
                                description={t('projects.items.portfolio.description')}
                                technologies={[react, javascript, framerMotion, tailwind]}
                                githubUrl={"https://github.com/LittleEmber13/portfolio-2025"}
                            />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                            className="w-full pt-8">
                            <Project
                                name={t('projects.items.ugc_database.name')}
                                openSource={false}
                                image={ugcdatabase}
                                description={t('projects.items.ugc_database.description')}
                                technologies={[typescript, nextjs, tailwind]}
                            />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                            className="w-full pt-8">
                            <Project
                                name={t('projects.items.berrly.name')}
                                openSource={false}
                                image={berrly}
                                description={t('projects.items.berrly.description')}
                                technologies={[flutter]}
                            />
                        </motion.div>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
                            className="w-full pt-8">
                            <Project
                                name={t('projects.items.bovidata.name')}
                                openSource={false}
                                image={bovidata}
                                description={t('projects.items.bovidata.description')}
                                technologies={[flutter, firebase]}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}