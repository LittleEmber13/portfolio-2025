import github from "../assets/icons/github.png";
import mail from "../assets/icons/mail.png";
import linkedin from "../assets/icons/linkedin.png";

export default function Welcome() {
    return (
        <section>
            <div
                style={{
                    justifyItems: "start",
                }}
            >
                <h1>Hi,</h1>
                <h1>I'm Daniel</h1>
                <h3>Software developer</h3>

            </div>
            <div
                style={{
                    justifyItems: "start",
                    justifyContent: "start",
                    alignItems: "start",
                    textAlign: "start",
                    paddingTop: "8px",
                }}>
                <p>Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "16px",
                    gap: "16px",
                }}>
                <div
                    className="icon-button"
                    style={{
                        width: 42,
                        height: 42,
                    }}>
                    <img
                        src={github}
                        alt={name}
                        style={{
                            width: "50%",
                            height: "50%",
                            objectFit: "contain",
                        }} />
                </div>
                <div
                    className="icon-button"
                    style={{
                        width: 42,
                        height: 42,
                    }}>
                    <img
                        src={linkedin}
                        alt={name}
                        style={{
                            width: "50%",
                            height: "50%",
                            objectFit: "contain",
                        }} />
                </div>
                <div
                    className="icon-button"
                    style={{
                        width: 42,
                        height: 42,
                    }}>
                    <img
                        src={mail}
                        alt={name}
                        style={{
                            width: "50%",
                            height: "50%",
                            objectFit: "contain",
                        }} />
                </div>
            </div>
        </section>
    );
}