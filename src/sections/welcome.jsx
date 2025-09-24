export default function Welcome() {
    return (
        <section>
            <h1>Hi,</h1>
            <h1>I'm Daniel</h1>
            <h3>Software developer</h3>
            <p>descripcion</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <div
                    style={{
                        backgroundColor: "red",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                    }} />
                <div
                    style={{
                        marginLeft: "8px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                    }} />
                <div
                    style={{
                        marginLeft: "8px",
                        backgroundColor: "red",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                    }} />
            </div>
        </section>
    );
}