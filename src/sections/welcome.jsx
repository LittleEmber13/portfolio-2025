import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import header from "../assets/gifs/header.gif";
import linkedin from "../assets/icons/linkedin.png";
import TypingText from "@/components/typing_text";

export default function Welcome({ id }) {
    return (
        <section id={id} className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center gap-8 p-2 lg:pl-24">
                <div>
                    <div className="pb-4 w-full">
                        <TypingText text="Hi, I'm Daniel" />
                        <h3>Software developer</h3>
                    </div>
                    <div className="text-start pt-2">
                        <p>
                            I have 3 years of experience in mobile development with Flutter,
                            having participated in several projects that have helped me grow
                            significantly as a developer, learning to write better code and
                            solve real-world problems.
                        </p>
                        <br />
                        <p>
                            I enjoy writing clean, scalable, and easy to maintain code.
                        </p>
                    </div>

                </div>
                <img
                    src={header}
                    alt="gif"
                    className="hidden lg:block w-[50%] h-auto shrink-0"
                />
            </div>
            {
                /*
                <div className="flex items-center gap-4 pt-16  w-full">
                    <div className="h-[2px] bg-red-400 flex-1" />
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={github} alt={name} className="w-1/2" />
                    </div>
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={linkedin} alt={name} className="w-1/2" />
                    </div>
                    <div className="icon-button aspect-square w-[42px] flex items-center justify-center rounded-full">
                        <img src={mail} alt={name} className="w-1/2" />
                    </div>
                    <div className="h-[2px] bg-red-400 flex-1" />
                </div>
                */
            }
            <div className="flex justify-center p-8 pt-16 gap-4">
                <a
                    href="https://github.com/LittleEmber13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={github} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
                <a
                    href="https://linkedin.com/in/daniel-d-043975201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={linkedin} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
                <a
                    href="mailto:ddur1302@gmail.com"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    <div className="interactable w-[42px] h-[42px] flex items-center justify-center">
                        <img src={mail} alt={name} className="w-1/2 h-auto" />
                    </div>
                </a>
            </div>
        </section>
    );
}