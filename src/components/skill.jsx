export default function Skill({ name, imgSrc, size }) {
    return (
        <div class="flex flex-col items-center gap-2 w-[60px]">
            <div
                className="icon-button"
                style={{
                    width: size,
                    height: size,
                }}>
                <img src={imgSrc} alt={name} className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="m-0 text-sm text-center">{name}</p>

        </div>
    );
}
