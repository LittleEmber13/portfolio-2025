import prefab from "../assets/prefab.jpg";
import { motion } from "framer-motion";

export default function Project({ name, description, technologies }) {
    return (
        <motion.div className="flex flex-col w-[250px] text-start !p-0 card"
            whileHover={{
                scale: 1.025,
                transition: { duration: 0.1 },
            }} >
            <img
                src={prefab}
                alt="Prefab"
                className="w-full contain-content block"
            />
            <div className="p-[16px] text-start">
                <p>{name}</p>
                <p>{description}</p>
                <div
                    className="flex gap-[4px]">
                    {technologies.map((tech) => (
                        <div
                            className="icon-button"
                            style={{
                                width: 24,
                                height: 24,
                            }}>
                            <img
                                src={tech}
                                alt={name}
                                style={{
                                    width: "50%",
                                    height: "50%",
                                    objectFit: "contain",
                                }} />
                        </div>

                    ))}
                </div>
            </div>
        </motion.div>
    );
}
