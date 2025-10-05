import Skill from "../components/skill";
import prefab from "../assets/prefab.jpg";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";
import nextjs from "../assets/icons/nextjs.png";
import javascript from "../assets/icons/javascript.png";
import git from "../assets/icons/git.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import docker from "../assets/icons/docker.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Skills({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <section id={id}>
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} >
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">My skills</h3>
                    <div className="h-2 rounded-full bg-red-400 w-full" />
                </div>
                <div className="flex flex-col md:flex-row gap-[16px] px-8 py-12">
                    <div>
                        <div className="flex flex-col md:flex-row gap-[16px] text-center">
                            <div className="card !p-[16px]">
                                <h5 className="mb-4">Frontend Development</h5>
                                <div className="grid grid-cols-5 md:grid-cols-3 gap-4 justify-items-center">
                                    <Skill name={"ReactJs"} imgSrc={react} size={48} />
                                    <Skill name={"Next.js"} imgSrc={nextjs} size={48} />
                                    <Skill name={"Typescript"} imgSrc={typescript} size={48} />
                                    <Skill name={"Javascript"} imgSrc={javascript} size={48} />
                                    <Skill name={"CSS3"} imgSrc={prefab} size={48} />
                                    <Skill name={"HTML5"} imgSrc={prefab} size={48} />
                                    <Skill name={"Tailwind CSS"} imgSrc={tailwind} size={48} />
                                    <Skill name={"Framer Motion"} imgSrc={framerMotion} size={48} />
                                </div>
                            </div>
                            <div className="card !p-[16px]">
                                <h5 className="mb-4">Backend & Database</h5>
                                <div className="grid grid-cols-5 md:grid-cols-3 gap-4 justify-items-center">
                                    <Skill name={"Java"} imgSrc={prefab} size={48} />
                                    <Skill name={"C#"} imgSrc={prefab} size={48} />
                                    <Skill name={"Python"} imgSrc={prefab} size={48} />
                                    <Skill name={"Prisma"} imgSrc={prefab} size={48} />
                                    <Skill name={"Symfony"} imgSrc={prefab} size={48} />
                                    <Skill name={"MariaDB"} imgSrc={prefab} size={48} />
                                    <Skill name={"MySQL"} imgSrc={prefab} size={48} />
                                    <Skill name={"MongoDB"} imgSrc={prefab} size={48} />
                                </div>
                            </div>
                        </div>
                        <div className="card !p-[16px] my-[16px] text-center">
                            <h5 className="mb-4">Other</h5>
                            <div className="grid grid-cols-5 md:grid-cols-6 gap-4 justify-items-center">
                                <Skill name={"Git"} imgSrc={git} size={48} />
                                <Skill name={"RESTful APIs"} imgSrc={prefab} size={48} />
                                <Skill name={"Firebase"} imgSrc={prefab} size={48} />
                                <Skill name={"Responsive Design"} imgSrc={prefab} size={48} />
                                <Skill name={"Figma"} imgSrc={prefab} size={48} />
                                <Skill name={"Docker"} imgSrc={docker} size={48} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[100%] md:w-[50%]">
                        <p>Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <button className="mt-[16px] text-white p-2">Contact me</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
