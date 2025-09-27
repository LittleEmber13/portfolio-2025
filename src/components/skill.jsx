export default function Skill({ name, imgSrc, size }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                width: "60px",
            }}>
            <div
                className="icon-button"
                style={{
                    width: size,
                    height: size,
                }}>
                <img
                    src={imgSrc}
                    alt={name}
                    style={{
                        width: "50%",
                        height: "50%",
                        objectFit: "contain",
                    }} />
            </div>
            <p style={{
                margin: 0,
                fontSize: "14px",
                textAlign: "center"
            }}> {name} </p>
        </div>
    );
}
