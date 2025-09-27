import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";

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
                        technologies={[tailwind, react]}
                    />
                    <Project
                        name="Project Name"
                        description="Project description"
                        technologies={[typescript]}
                    />
                </div>
            </div>
        </section>
    );
}
