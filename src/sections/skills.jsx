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

export default function Skills() {
    return (
        <section >
            <h1>My skills</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
            }}>
                <div
                    className="card"
                    style={{
                        padding: "16px",
                    }}
                >
                    <h3>Fontend Develpment</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"ReactJs"} imgSrc={react} size={48} />
                        <Skill name={"Next.js"} imgSrc={nextjs} size={48} />
                        <Skill name={"Typescript"} imgSrc={typescript} size={48} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Javascript"} imgSrc={javascript} size={48} />
                        <Skill name={"CSS3"} imgSrc={prefab} size={48} />
                        <Skill name={"HTML5"} imgSrc={prefab} size={48} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Tailwind CSS"} imgSrc={tailwind} size={48} />
                        <Skill name={"Framer Motion"} imgSrc={framerMotion} size={48} />
                    </div>
                </div>
                <div
                    className="card"
                    style={{
                        padding: "16px",
                    }}
                >
                    <h3>Backend & Database</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"Java"} imgSrc={prefab} size={48} />
                        <Skill name={"C#"} imgSrc={prefab} size={48} />
                        <Skill name={"Python"} imgSrc={prefab} size={48} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Prisma"} imgSrc={prefab} size={48} />
                        <Skill name={"Symfony"} imgSrc={prefab} size={48} />
                        <Skill name={"MariaDB"} imgSrc={prefab} size={48} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"MySQL"} imgSrc={prefab} size={48} />
                        <Skill name={"MongoDB"} imgSrc={prefab} size={48} />
                    </div>
                </div>
                <div
                    className="card"
                    style={{
                        padding: "16px",
                    }}
                >
                    <h3>Other</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"Git"} imgSrc={git} size={48} />
                        <Skill name={"RESTful APIs"} imgSrc={prefab} size={48} />
                        <Skill name={"Firebase"} imgSrc={prefab} size={48} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Responsive Design"} imgSrc={prefab} size={48} />
                        <Skill name={"Figma"} imgSrc={prefab} size={48} />
                        <Skill name={"Docker"} imgSrc={docker} size={48} />
                    </div>
                </div>
            </div>
        </section>
    );
}
