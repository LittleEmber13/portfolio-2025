export default function Skill({ name, imgSrc }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "60px",
            backgroundColor: "yellow",
        }}>
            <div style={{
                backgroundColor: "red",
                borderRadius: "50%",
                width: 48,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}>
                <img
                    src={imgSrc}
                    alt={name}
                    style={{
                        width: "70%",
                        height: "70%",
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
