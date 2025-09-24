import Skill from "../components/skill";
import prefab from "../assets/prefab.jpg";

export default function Skills() {
    return (
        <section >
            <h1>My skills</h1>
            <div style={{
                backgroundColor: "blue",
            }}
            >
                <h3>Fontend Develpment</h3>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "start",
                }}>
                    <Skill name={"ReactSs"} imgSrc={prefab} />
                    <Skill name={"Next.js"} imgSrc={prefab} />
                    <Skill name={"Typescript"} imgSrc={prefab} />
                </div>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "start",
                }}>
                    <Skill name={"Javascript"} imgSrc={prefab} />
                    <Skill name={"CSS3"} imgSrc={prefab} />
                    <Skill name={"HTML5"} imgSrc={prefab} />
                </div>
                <div style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "start",
                }}>
                    <Skill name={"Tailwind CSS"} imgSrc={prefab} />
                    <Skill name={"Framer Motion"} imgSrc={prefab} />
                </div>
            </div>
        </section>
    );
}
