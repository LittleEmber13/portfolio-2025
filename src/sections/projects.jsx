import Project from "../components/project";
import typescript from "../assets/icons/typescript.png";
import tailwind from "../assets/icons/tailwind.png";
import react from "../assets/icons/react.png";

export default function Projects() {
    return (
        <section>
            <h1>Projects i've worked on</h1>
            <div>
                <div className="grid grid-cols-3 gap-5 w-full" >
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
                <div className="grid grid-cols-3 gap-5 w-full mt-4" >
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
