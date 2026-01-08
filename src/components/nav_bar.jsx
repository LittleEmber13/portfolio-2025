import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [show, setShow] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const content = show ? (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex bg-[var(--color-surface)] p-2 gap-4 rounded-full px-8 fixed z-10 mt-4"
        >
            <a href="#welcome" className="cursor-pointer">{t('nav.welcome')}</a>
            <a href="#projects" className="cursor-pointer">{t('nav.projects')}</a>
            <a href="#skills" className="cursor-pointer">{t('nav.skills')}</a>
            <a href="#contact" className="cursor-pointer">{t('nav.contact')}</a>
            <div className="ml-2">
                <select
                    value={i18n.language}
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    aria-label={t('nav.language') || 'Language'}
                    className="bg-transparent text-sm p-1 rounded"
                >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            </div>
        </motion.div>
    ) : null;

    return (
        <AnimatePresence>
            {content}
        </AnimatePresence>
    );
}
