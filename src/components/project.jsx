import prefab from "../assets/prefab.jpg";

export default function Project({ name, description, technologies }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "250px",
            backgroundColor: "yellow",
        }}>
            <img
                src={prefab}
                alt="Prefab"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            />
            <p>{name}</p>
            <p>{description}</p>
            <div style={{
                display: "flex",
                margin: "8px",
                marginBottom: "16px",
            }}>
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            backgroundColor: "#1b568cff",
                            borderRadius: "6px",
                            padding: "6px",
                            margin: "2px",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        {tech}
                    </div>

                ))}
            </div>
        </div>
    );
}
