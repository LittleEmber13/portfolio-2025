import Skill from "../components/skill";
import prefab from "../assets/prefab.jpg";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import csharp from "../assets/icons/csharp.png";
import figma from "../assets/icons/figma.png";
import java from "../assets/icons/java.png";
import mariadb from "../assets/icons/mariadb.png";
import mongodb from "../assets/icons/mongodb.png";
import mysql from "../assets/icons/mysql.png";
import prisma from "../assets/icons/prisma.png";
import python from "../assets/icons/python.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import rest from "../assets/icons/rest.png";
import responsive from "../assets/icons/idea.png";
import symfony from "../assets/icons/symfony.png";
import flutter from "../assets/icons/flutter.png";
import firebase from "../assets/icons/firebase.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import git from "../assets/icons/git.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import docker from "../assets/icons/docker.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { useInView } from "framer-motion";

export default function Skills({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    const { t: _t } = useTranslation();

    return (
        <section id={id}>
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} >
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">{_t('skills.heading')}</h3>
                    <div className="h-2 rounded-full bg-[var(--color-surface)] w-full" />
                </div>
                <div className="flex flex-col md:flex-row gap-8 px-8 py-12">
                    <div>
                        <div className="flex flex-col md:flex-row gap-[16px] text-center">
                            <div className="card !p-[16px]">
                                <h5 className="mb-4">{_t('skills.frontend')}</h5>
                                <div className="grid grid-cols-5 md:grid-cols-3 gap-4 justify-items-center">
                                    <Skill name={"Flutter"} imgSrc={flutter} size={48} />
                                    <Skill name={"ReactJs"} imgSrc={react} size={48} />
                                    <Skill name={"Next.js"} imgSrc={nextjs} size={48} />
                                    <Skill name={"Typescript"} imgSrc={typescript} size={48} />
                                    <Skill name={"Javascript"} imgSrc={javascript} size={48} />
                                    <Skill name={"CSS3"} imgSrc={css} size={48} />
                                    <Skill name={"HTML5"} imgSrc={html} size={48} />
                                    <Skill name={"Tailwind CSS"} imgSrc={tailwind} size={48} />
                                    <Skill name={"Framer Motion"} imgSrc={framerMotion} size={48} />
                                </div>
                            </div>
                            <div className="card !p-[16px]">
                                <h5 className="mb-4">{_t('skills.backend')}</h5>
                                <div className="grid grid-cols-5 md:grid-cols-3 gap-4 justify-items-center">
                                    <Skill name={"Java"} imgSrc={java} size={48} />
                                    <Skill name={"C#"} imgSrc={csharp} size={48} />
                                    <Skill name={"Python"} imgSrc={python} size={48} />
                                    <Skill name={"Prisma"} imgSrc={prisma} size={48} />
                                    <Skill name={"Symfony"} imgSrc={symfony} size={48} />
                                    <Skill name={"MariaDB"} imgSrc={mariadb} size={48} />
                                    <Skill name={"MySQL"} imgSrc={mysql} size={48} />
                                    <Skill name={"MongoDB"} imgSrc={mongodb} size={48} />
                                </div>
                            </div>
                        </div>
                        <div className="card !p-[16px] my-[16px] text-center">
                            <h5 className="mb-4">{_t('skills.other')}</h5>
                            <div className="grid grid-cols-5 md:grid-cols-6 gap-4 justify-items-center">
                                <Skill name={"Git"} imgSrc={git} size={48} />
                                <Skill name={"RESTful APIs"} imgSrc={rest} size={48} />
                                <Skill name={"Firebase"} imgSrc={firebase} size={48} />
                                <Skill name={"Responsive Design"} imgSrc={responsive} size={48} />
                                <Skill name={"Figma"} imgSrc={figma} size={48} />
                                <Skill name={"Docker"} imgSrc={docker} size={48} />
                            </div>
                        </div>
                    </div>
                        <div className="flex flex-col w-[100%] md:w-[50%] text-[var(--color-body)]">
                        <p>{_t('skills.p1')}</p>
                        <br />
                        <p className="mb-[16px]">{_t('skills.p2')}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
