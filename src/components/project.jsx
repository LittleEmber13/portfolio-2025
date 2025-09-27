import prefab from "../assets/prefab.jpg";

export default function Project({ name, description, technologies }) {
    return (
        <div
            className="card"
            style={{
                padding: "0px",
                display: "flex",
                flexDirection: "column",
                width: "250px",
                textAlign: "start",
            }}>
            <img
                src={prefab}
                alt="Prefab"
                style={{
                    width: "100%",
                    objectFit: "contain",
                    display: "block",
                }}
            />
            <div style={{
                textAlign: "start",
                padding: "16px",
            }}>
                <p>{name}</p>
                <p>{description}</p>
                <div style={{
                    display: "flex",
                    gap: "4px",
                }}>
                    {technologies.map((tech) => (
                        <div
                            className="icon-button"
                            style={{
                                width: 24,
                                height: 24,
                            }}>
                            <img
                                src={tech}
                                alt={name}
                                style={{
                                    width: "50%",
                                    height: "50%",
                                    objectFit: "contain",
                                }} />
                        </div>

                    ))}
                </div>
            </div>


        </div>
    );
}
