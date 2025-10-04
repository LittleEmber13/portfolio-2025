import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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
                    <div className="h-2 rounded-full bg-red-400 w-full" />
                </div>
                <div className="flex justify-center gap-[16px] px-8 py-12">
                    <div className="card align-middle w-[250px]">
                        <h3>Get in touch</h3>
                        <p>Feel free to contact me for any work or suggestions below</p>
                        <p>Email</p>
                        <p>LinkedIn</p>
                        <p>Github</p>
                    </div>
                    <div className="card align-middle w-[250px]">
                        <p>Email</p>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Your email"
                        />
                        <p>Message</p>
                        <textarea
                            type="text"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Your message"
                        />
                        <button className="mt-[16px] text-white p-2"> Send Message</button>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
