import AboutMeBlock from "./AboutMeBlock";
import { ABOUT_ME_DATA } from "../data/data-es";
import { useState } from "react";

export default function AboutMe() {
    const [selectedTopic, setSelectedTopic] = useState(0);

    function handleNext() {
        if (selectedTopic >= ABOUT_ME_DATA.length - 1) {
            setSelectedTopic(0);
        } else {
            setSelectedTopic(selectedTopic + 1);
        }
    }

    return (
        <section id="about" className="flex flex-col justify-center items-center w-full h-auto mt-12 sm:mt-24 px-4 lg:px-0">
            <div className="w-full max-w-2xl mx-auto mb-8 sm:mb-12">
                <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <p className="text-base sm:text-lg text-neutral-100 my-4 sm:my-6 text-center md:text-left px-4 md:px-0">
                    Mi nombre es Javier y soy desarrollador de software con dos años de experiencia. Estoy comprometido con el crecimiento continuo y me especializo en la creación y modernización de proyectos, aportando soluciones eficientes y actualizadas.
                </p>
                <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
            <h2 className="text-2xl mt-10 mb-10 sm:text-3xl md:text-4xl uppercase text-center font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">SOBRE MI</h2>

            <div className="text-neutral-100 mt-3 sm:mt-5 w-full max-w-4xl md:w-3/5 h-auto">
                <AboutMeBlock
                    onNext={handleNext}
                    title={ABOUT_ME_DATA[selectedTopic].title}
                    text={ABOUT_ME_DATA[selectedTopic].text}
                    nextText={ABOUT_ME_DATA[selectedTopic >= ABOUT_ME_DATA.length - 1 ? 0 : selectedTopic + 1].title}
                />
            </div>
        </section>
    );
}