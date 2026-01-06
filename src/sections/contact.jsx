import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";
import emailjs from "emailjs-com";

export default function Contact({ id }) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
                alert("Correo enviado correctamente");
                setEmail("");
                setMessage("");
            })
            .catch(() => {
                alert("Error al enviar el correo");
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
                    <h3 className="p-2 pl-8 pr-8  max-w-[70%] whitespace-nowrap">Contact</h3>
                    <div className="h-2 rounded-full bg-[var(--color-primary-content)] w-full" />
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-[16px] px-8 py-12">
                    <div className="card align-middle !p-[16px]">
                        <h3>Get in touch</h3>
                        <p className="mt-2">Feel free to contact me for any work or suggestions below</p>
                        <div className="flex flex-col gap-3">
                            <div className="flex">
                                <a
                                    href="mailto:ddur1302@gmail.com"
                                    rel="noopener noreferrer">
                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={mail} className="w-1/2 h-auto object-contain" />
                                    </div>
                                </a>
                                <a
                                    href="mailto:ddur1302@gmail.com"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    Email
                                </a>
                            </div>
                            <div className="flex">
                                <a
                                    href={"https://linkedin.com/in/daniel-d-043975201/"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={linkedin} className="w-1/2 h-auto object-contain" />
                                    </div>
                                </a>
                                <a
                                    href={"https://linkedin.com/in/daniel-d-043975201/"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex">
                                <a
                                    href={"https://github.com/LittleEmber13"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="interactable w-[24px] h-[24px] mr-4">
                                        <img src={github} className="w-1/2 h-auto object-contain" />
                                    </div>
                                </a>
                                <a
                                    href={"https://github.com/LittleEmber13"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={sendEmail}>
                        <div className="card align-middle w-full !p-[16px]">
                            <p>Email</p>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="w-full"
                                required
                            />
                            <p className="mt-4">Message</p>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message"
                                className="w-full mb-[16px]"
                                required
                            />
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
