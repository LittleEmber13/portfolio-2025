import prefab from "../assets/prefab.jpg";
import { motion } from "framer-motion";

export default function Project({ name, description, technologies }) {
    return (
        <motion.div
            whileHover={{
                scale: 1.025,
                transition: { duration: 0.1 },
            }}
            className="card"
            style={{
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                width: "250px",
                textAlign: "start",
            }}>
            <img
                src={prefab}
                alt="Prefab"
                style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                }}
            />
            <div style={{
                textAlign: "start",
                padding: "16px",
            }}>
                <p>{name}</p>
                <p>{description}</p>
                <div style={{
                    display: "flex",
                    gap: "4px",
                }}>
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
