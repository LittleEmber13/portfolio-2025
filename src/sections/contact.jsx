import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";
import emailjs from "emailjs-com";
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL } from '../constants.jsx';

export default function Contact({ id }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_email: email,
                message: message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                alert(t('contact.sent_ok'));
                setEmail("");
                setMessage("");
            })
            .catch(() => {
                alert(t('contact.sent_err'));
            });
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <section id={id}>
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">{t('contact.heading')}</h3>
                    <div className="h-2 rounded-full bg-[var(--color-surface)] w-full" />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-[16px] px-8 py-12">
                    <div className="card align-middle !p-[16px]">
                        <h3>{t('contact.get_in_touch')}</h3>
                        <p className="mt-2 text-[var(--color-body)]">{t('contact.desc')}</p>
                        <div className="flex flex-col gap-1">
                            <a
                                href={`mailto:${EMAIL}`}
                                rel="noopener noreferrer">
                                <div className="flex">
                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={mail} className="w-1/2 h-auto object-contain" />
                                    </div>
                                    <p className="text-blue-500 hover:underline">
                                        {t('contact.email_label')}
                                    </p>
                                </div>
                            </a>
                            <a
                                href={LINKEDIN_LINK}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex">

                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={linkedin} className="w-1/2 h-auto object-contain" />
                                    </div>
                                    <p className="text-blue-500 hover:underline">
                                        {t('contact.linkedin_label')}
                                    </p>
                                </div>
                            </a>
                            <a
                                href={GITHUB_LINK}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex">
                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={github} className="w-1/2 h-auto object-contain" />
                                    </div>
                                    <p className="text-blue-500 hover:underline">
                                        {t('contact.github_label')}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="card align-middle w-full !p-[16px]">
                        <form onSubmit={sendEmail}>
                            <p>{t('contact.email_label')}</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('contact.form_email')}
                                className="w-full"
                                required
                            />
                            <p className="mt-4">{t('contact.form_message')}</p>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t('contact.form_message')}
                                className="w-full mb-[16px]"
                                required
                            />
                            <button>{t('contact.form_send')}</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section >
    );
}
