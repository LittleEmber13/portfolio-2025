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
        <section id={id} className="flex flex-col items-start justify-center min-h-screen lg:pl-24">
            <TypingText text={t('welcome.greeting')} />
            <div className="flex items-center gap-8 p-2">
                <div>
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

                </div>
                <div     className="hidden lg:block w-[50%] h-auto shrink-0">
                <motion.div initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1, ease: "easeOut", delay: 6
                    }} >
                    <img
                        src={header}
                        alt="gif"
                   
                    />
                </motion.div>
                </div>
            </div>
            <div className="flex justify-center pt-16 gap-4">
                <motion.div initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5, ease: "easeOut", delay: 4
                    }} >
                    <a
                        href={GITHUB_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                            <img src={github} alt={name} className="w-1/2 h-auto" />
                        </div>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5, ease: "easeOut", delay: 4.5
                    }} >                    <a
                        href={LINKEDIN_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                            <img src={linkedin} alt={name} className="w-1/2 h-auto" />
                        </div>
                    </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5, ease: "easeOut", delay: 5
                    }} >                    <a
                        href={`mailto:${EMAIL}`}
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                            <img src={mail} alt={name} className="w-1/2 h-auto" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}