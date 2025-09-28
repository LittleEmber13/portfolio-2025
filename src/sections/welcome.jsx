import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";

export default function Welcome() {
    return (
        <section>
            <div className="justify-items-start" >
                <h1>Hi,</h1>
                <h1>I'm Daniel</h1>
                <h3>Software developer</h3>

            </div>
            <div className="justify-items-start justify-start items-start text-start pt-2">
                <p>Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

            </div>
            <div className="flex justify-center p-4 gap-4">
                <div className="icon-button w-[42px] h-[42px]">
                    <img src={github} alt={name} className="w-1/2 h-auto object-contain" />
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