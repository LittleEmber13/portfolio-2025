import { useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const [message, setMessage] = useState("");

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <section >
            <h1>Contact</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "250px",
                    backgroundColor: "yellow",
                }}>
                    <h1>Get in touch</h1>
                    <p>Feel free to contact me for any work or suggestions below</p>
                    <p>Email</p>
                    <p>LinkedIn</p>
                    <p>Github</p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "250px",
                    backgroundColor: "yellow",
                }}>
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
                    <button
                        style={{
                            color: "white",
                            marginTop: "16px",
                        }}> Send Message</button>

                </div>
            </div>
        </section>
    );
}
