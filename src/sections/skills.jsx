import Skill from "../components/skill";
import prefab from "../assets/prefab.jpg";

export default function Skills() {
    return (
        <section >
            <h1>My skills</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
            }}>
                <div style={{
                    backgroundColor: "blue",
                    padding: "16px",
                }}
                >
                    <h3>Fontend Develpment</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"ReactJs"} imgSrc={prefab} />
                        <Skill name={"Next.js"} imgSrc={prefab} />
                        <Skill name={"Typescript"} imgSrc={prefab} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Javascript"} imgSrc={prefab} />
                        <Skill name={"CSS3"} imgSrc={prefab} />
                        <Skill name={"HTML5"} imgSrc={prefab} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Tailwind CSS"} imgSrc={prefab} />
                        <Skill name={"Framer Motion"} imgSrc={prefab} />
                    </div>
                </div>
                <div style={{
                    backgroundColor: "blue",
                    padding: "16px",
                }}
                >
                    <h3>Backend & Database</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"Java"} imgSrc={prefab} />
                        <Skill name={"C#"} imgSrc={prefab} />
                        <Skill name={"Python"} imgSrc={prefab} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Prisma"} imgSrc={prefab} />
                        <Skill name={"Symfony"} imgSrc={prefab} />
                        <Skill name={"MariaDB"} imgSrc={prefab} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"MySQL"} imgSrc={prefab} />
                        <Skill name={"MongoDB"} imgSrc={prefab} />
                    </div>
                </div>
                <div style={{
                    backgroundColor: "blue",
                    padding: "16px",
                }}
                >
                    <h3>Other</h3>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                    }}>
                        <Skill name={"Git"} imgSrc={prefab} />
                        <Skill name={"RESTful APIs"} imgSrc={prefab} />
                        <Skill name={"Firebase"} imgSrc={prefab} />
                    </div>
                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "start",
                        marginTop: "16px",
                    }}>
                        <Skill name={"Responsive Design"} imgSrc={prefab} />
                        <Skill name={"Figma"} imgSrc={prefab} />
                        <Skill name={"Docker"} imgSrc={prefab} />
                    </div>
                </div>
            </div>
        </section>
    );
}
