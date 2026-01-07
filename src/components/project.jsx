import prefab from "../assets/prefab.jpg";
import { motion } from "framer-motion";
import github from "../assets/icons/github.png";

export default function Project({ name, description, technologies, openSource, image, githubUrl }) {
    return (
        <motion.div className="flex flex-col w-full text-start !p-0 card break-inside-avoid mb-12"
            initial={{ scale: 1 }}
            whileHover={{
                scale: 1.025,
                transition: { duration: 0.1 },
            }} >
            <img
                src={image ?? prefab}
                alt="Prefab"
                className="w-full contain-content block rounded-t-lg"
            />
            <div className="p-[16px] text-start">
                <div className="flex">
                    <h4 className="pr-4">{name}</h4>
                    {openSource == true ? (
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-400 px-2 text-xs font-medium text-green-400">
                            <span>Open Source</span>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-2 text-xs font-medium text-orange-400">
                            <span>Propietary</span>
                        </div>
                    )}
                </div>
                <br />
                <p className="text-[var(--color-body)]">{description}</p>
                <div className="pb-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Source code
                        </a>
                    )}
                </div>
                <div className="flex items-center gap-[4px]">
                    {technologies.map((tech) => (
                        <div key={tech} className="icon-button w-[24px] h-[24px]">
                            <img
                                src={tech}
                                alt={name}
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </motion.div>
    );
}
