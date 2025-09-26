export default function AnimatedBackground() {
    return (
        <div className="animated-background">
            <div className="animated-background-square" style={{
                animationDelay: "-5s"
            }} />
            <div className="animated-background-square" style={{
                animationDelay: "-50s",
            }} />
            <div className="animated-background-square" style={{
                animationDelay: "-125s",
            }} />
            <div className="animated-background-square" style={{
                animationDelay: "-35s",
            }} />
            <div className="animated-background-square" style={{
                animationDelay: "-25s",
            }} />
            <div className="animated-background-square" style={{
                animationDelay: "-165s",
            }} />
        </div>
    );
}
