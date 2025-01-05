import Button from "./Button";
import cv from "../assets/cv/cv-javier.pdf";

export default function TopMenu() {
    function handleCvButton() {
        window.open(cv, '_blank');
    }

    return (
        <>
            <nav className='fixed top-0 h-16 w-full flex flex-row bg-black/90 border-b-white border-b-2 backdrop-blur-lg backdrop-filter z-50'>
                <div className="flex h-full w-1/2 lg:w-2/4 justify-start items-center">
                    <p className="text-neutral-50 m-5 text-xl">Jatez</p>
                </div>
                <div className="flex h-full w-1/2 lg:w-2/4 justify-end items-center mr-4 space-x-1 lg:space-x-3">
                    <a href="#about" className="hidden lg:inline">
                        <Button text="Sobre mi" />
                    </a>
                    <a href="#experience" className="hidden lg:inline">
                        <Button text="Experiencia" />
                    </a>
                    <a href="#projects" className="hidden lg:inline">
                        <Button text="Proyectos" />
                    </a>
                    <a onClick={handleCvButton} className="hidden lg:inline">
                        <Button text="CV" />
                    </a>
                    <button className="lg:hidden text-neutral-50" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </nav>
            <div id="mobile-menu" className="hidden lg:hidden fixed top-16 left-0 w-full bg-black/90 border-b-white border-b-2 backdrop-blur-lg backdrop-filter z-40">
                <a href="#about" className="block p-4 text-neutral-50">
                    Sobre Mi
                </a>
                <a href="#experience" className="block p-4 text-neutral-50">
                    Experiencia
                </a>
                <a href="#projects" className="block p-4 text-neutral-50">
                    Proyectos
                </a>
                <a href="#cv" className="block p-4 text-neutral-50" onClick={handleCvButton}>
                    CV
                </a>
            </div>
        </>
    );
}

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}