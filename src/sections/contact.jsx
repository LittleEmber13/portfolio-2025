import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";


export default function Contact({ id }) {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <section id={id}>
            <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex items-center pr-8">
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">Contact</h3>
                    <div className="h-2 rounded-full bg-[var(--color-primary-content)] w-full" />
                </div>
                <div className="flex justify-center gap-[16px] px-8 py-12">
                    <div className="card align-middle !p-[16px]">
                        <h3>Get in touch</h3>
                        <p className="mt-2">Feel free to contact me for any work or suggestions below</p>
                        <div className="flex">
                            <div className="interactable w-[24px] h-[24px] mr-4">
                                <img src={mail} className="w-1/2 h-auto object-contain" />
                            </div>
                            <p>Email</p>
                        </div>
                        <div className="flex">
                            <div className="interactable w-[24px] h-[24px] mr-4">
                                <img src={linkedin} className="w-1/2 h-auto object-contain" />
                            </div>
                            <p>LinkedIn</p>
                        </div>
                        <div className="flex">
                            <div className="interactable w-[24px] h-[24px] mr-4">
                                <img src={github} className="w-1/2 h-auto object-contain" />
                            </div>
                            <p>Github</p>
                        </div>
                    </div>
                    <div className="card align-middle w-full !p-[16px]">
                        <p>Email</p>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Your email"
                            className="w-full"
                        />
                        <p className="mt-4">Message</p>
                        <textarea
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Your message"
                            className="w-full mb-[16px]"
                        />
                        <button>Send Message</button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
