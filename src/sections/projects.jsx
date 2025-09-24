import prefab from "../assets/prefab.jpg";

export default function Projects() {
    return (
        <section>
            <h1>Projects i've worked on</h1>
            <div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "20px",
                        width: "100%",
                        marginTop: "16px",
                    }}
                >
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src={prefab}
                        alt="Prefab"
                        style={{
                            width: "100%",
                            height: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
