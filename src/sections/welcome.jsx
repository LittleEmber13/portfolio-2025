import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";
import TypingText from "@/components/typing_text";

export default function Welcome({ id }) {
    return (
        <section id={id} className="flex flex-col items-center justify-center min-h-screen">
            <div className="justify-items-start pb-4 w-full" >
                <TypingText text="Hi, I'm Daniel" />
                <h1>Software developer</h1>
            </div>
            <div className="justify-items-start justify-start items-start text-start pt-2">
                <p>Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
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