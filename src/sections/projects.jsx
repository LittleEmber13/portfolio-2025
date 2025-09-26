import prefab from "../assets/prefab.jpg";
import Project from "../components/project";

export default function Projects() {
    return (
        <section>
            <h1>Projects i've worked on</h1>
            <div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={["Next.js", "Tailwind"]}
                    />
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={["Flutter", "Firebase"]}
                    />
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={["React.js", "Tailwind", "Framer Motion"]}
                    />
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        width: "100%",
                        marginTop: "16px",
                    }}
                >
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={["Flutter"]}
                    />
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={["Symfony", "Docker"]}
                    />
                </div>
            </div>
        </section>
    );
}
