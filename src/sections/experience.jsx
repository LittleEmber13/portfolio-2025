import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, Github } from "lucide-react";
import SectionHeader from "../components/section_header";

const TYPE_META = {
    work: {
        color: "var(--color-primary)",
        icon: Briefcase,
    },
    education: {
        color: "var(--color-primary-light)",
        icon: GraduationCap,
    },
    openSource: {
        color: "var(--color-secondary)",
        icon: Github,
    },
};

const MAIN_TIMELINE = [
    { id: "design", type: "education" },
    { id: "dam", type: "education" },
    { id: "magnetapps", type: "work" },
];

const LEFT_TIMELINE = [
    { id: "tuulapp", type: "work" },
    { id: "verisure", type: "work" },
];

const RIGHT_TIMELINE = [
    { id: "opensource", type: "openSource" },
];

export default function Experience({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useTranslation();

    const renderCard = (item, delay, timeline) => {
        const meta = TYPE_META[item.type];
        const Icon = meta.icon;
        const isActive = t(`experience.items.${item.id}.end`) === "";

        const card = (
            <div className="card !p-6 flex flex-col gap-2 text-start">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase tracking-wide text-[var(--color-body)]">
                        {t(`experience.items.${item.id}.start`)}
                        {" — "}
                        {isActive ? t('experience.current') : t(`experience.items.${item.id}.end`)}
                    </span>
                    <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium"
                        style={{
                            borderColor: `color-mix(in srgb, ${meta.color} 50%, transparent)`,
                            color: meta.color,
                        }}
                    >
                        <Icon size={12} style={{ color: meta.color }} />
                        {t(`experience.types.${item.type}`)}
                    </span>
                    {isActive && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]" />
                            </span>
                            {t('experience.active')}
                        </span>
                    )}
                </div>
                <h4>{t(`experience.items.${item.id}.role`)}</h4>
                <p className="font-medium" style={{ color: meta.color }}>
                    {t(`experience.items.${item.id}.company`)}
                </p>
                <p className="text-[var(--color-body)] text-sm m-0">
                    {t(`experience.items.${item.id}.description`)}
                </p>
            </div>
        );

        if (timeline === "right") {
            return (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay }}
                    className="relative pl-10 md:pl-0 w-full"
                >
                    <div
                        className="absolute left-0 top-1 flex md:hidden items-center justify-center w-[15px] h-[15px] rounded-full border-2 bg-[var(--color-background)] border-[var(--color-primary)]"
                    >
                        <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-primary)]" />
                    </div>
                    {card}
                </motion.div>
            );
        }

        return (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay }}
                className="relative pl-10"
            >
                <div
                    className="absolute left-0 top-1 flex items-center justify-center w-[15px] h-[15px] rounded-full border-2 bg-[var(--color-background)] border-[var(--color-primary)]"
                >
                    <div className="w-[5px] h-[5px] rounded-full bg-[var(--color-primary)]" />
                </div>
                {card}
            </motion.div>
        );
    };

    return (
        <section id={id} className="w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <SectionHeader title={t('experience.heading')} />
                <div className="solid-background p-8 w-full">
                    <div className="relative flex flex-col gap-6">
                        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary-light)] to-transparent" />
                        {MAIN_TIMELINE.map((item, index) => renderCard(item, 0.1 + index * 0.1, "main"))}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-start">
                            <div className="flex flex-col gap-6">
                                {LEFT_TIMELINE.map((item, index) => renderCard(item, 0.3 + index * 0.1, "left"))}
                            </div>
                            <div className="flex flex-col gap-6">
                                {RIGHT_TIMELINE.map((item, index) => renderCard(item, 0.3 + index * 0.1, "right"))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}