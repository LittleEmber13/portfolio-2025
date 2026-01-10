import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import header from "../assets/gifs/header.gif";
import linkedin from "../assets/icons/linkedin.png";
import TypingText from "@/components/typing_text";
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL } from '../constants.jsx';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Welcome({ id }) {
    const { t } = useTranslation();
    return (
        <section id={id} className="min-h-screen px-8 sm:px-2 md:px-0 lg:px-0 flex items-center">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between container mx-auto">
                <div className="lg:w-1/2 w-full flex flex-col items-start">
                    <TypingText text={t('welcome.greeting')} />
                    <div className="w-full">
                        <div className="pb-4 w-full">
                            <motion.div initial={{ opacity: 0, y: -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1, ease: "easeOut", delay: 2
                                }} >
                                <h3>{t('welcome.title')}</h3>
                            </motion.div>
                        </div>
                        <div className="text-start pt-2">
                            <motion.div initial={{ opacity: 0, y: -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1, ease: "easeOut", delay: 3
                                }} >
                                <p>
                                    {t('welcome.p1')}
                                </p>
                                <br />
                                <p>
                                    {t('welcome.p2')}
                                </p>
                            </motion.div>
                        </div>
                        <div className="flex justify-start pt-8 gap-4">
                            <motion.div initial={{ opacity: 0, x: -25, scale: 1 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5, ease: "easeOut", delay: 4, scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.1 },
                                }} >
                                <a
                                    href={GITHUB_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                                        <img src={github} alt="github" className="w-1/2 h-auto" />
                                    </div>
                                </a>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -25, scale: 1 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5, ease: "easeOut", delay: 4.5, scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.1 },
                                }} >
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                                        <img src={linkedin} alt="linkedin" className="w-1/2 h-auto" />
                                    </div>
                                </a>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: -25, scale: 1 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{
                                    duration: 0.5, ease: "easeOut", delay: 5, scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.1 },
                                }} >
                                <a
                                    href={`mailto:${EMAIL}`}
                                    rel="noopener noreferrer"
                                >
                                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                                        <img src={mail} alt="mail" className="w-1/2 h-auto" />
                                    </div>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2 w-full justify-end">
                    <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1, ease: "easeOut", delay: 6
                        }} >
                        <img
                            src={header}
                            alt="gif"
                            className="max-w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}