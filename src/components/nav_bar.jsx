export default function NavBar() {
    return (
        <div className="flex bg-red-500 p-2 gap-4 rounded-full px-8  fixed z-10 mt-4">
            <a href="#welcome" className="cursor-pointer">Welcome</a>
            <a href="#projects" className="cursor-pointer">Projects</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#contact" className="cursor-pointer">Contact</a>
        </div>
    );
}
