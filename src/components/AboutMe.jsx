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
                    Me abordé en el mundo de la programación por diversos motivos. A día de hoy, sigo aprendiendo y mejorando día tras día.
                </p>
                <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>
            <div className="mt-8 sm:mt-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-5xl md:w-2/3 mb-6 sm:mb-10 text-center uppercase opacity-80">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-50 uppercase text-center font-semibold opacity-80">SOBRE MI</h2>
            </div>
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