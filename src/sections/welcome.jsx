import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";
import TypingText from "@/components/typing_text";

export default function Welcome({ id }) {
    return (
        <section id={id} className="flex flex-col items-center justify-center min-h-screen">
            <div className="justify-items-start pb-4 w-full" >
                <TypingText text="Hi, I'm Daniel" />
                <h3>Software developer</h3>
            </div>
            <div className="justify-items-start justify-start items-start text-start pt-2">
                <p>I have 3 years of experience in mobile development with Flutter, having participated in several projects that have helped me grow significantly as a developer, learning to write better code and solve real-world problems. I also have experience with React and Next.js, which allows me to work comfortably on both mobile and web projects.</p>
                <br />
                <p>I enjoy writing clean, scalable, and easy-to-maintain code. I am always learning new things and looking for ways to improve what I do.</p>

            </div>
            <div className="flex justify-center p-8 gap-4">
                <div className="icon-button w-[42px] h-[42px]">
                    <img src={github} alt={name} class="w-1/2 h-auto object-contain" />
                </div>
                <div className="icon-button w-[42px] h-[42px]">
                    <img src={linkedin} alt={name} className="w-1/2 h-auto object-contain" />
                </div>
                <div className="icon-button w-[42px] h-[42px]">
                    <img src={mail} alt={name} className="w-1/2 h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}