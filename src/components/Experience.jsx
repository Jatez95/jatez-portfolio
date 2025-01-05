import ExperienceCards from './ExperienceCards';
import { EXPERIENCE_DATA } from '../data/data-es';

export default function Experience() {
    return (
        <section id='experience' className="flex flex-col justify-center items-center w-full h-2/4 mt-24 mb-10">
            <div className="mt-8 sm:mt-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-5xl md:w-2/3 mb-6 sm:mb-10 text-center uppercase opacity-80">
                <h2 className="text-3xl md:text-4xl text-neutral-50 uppercase text-center font-semibold opacity-80">EXPERIENCIA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-10 justify-items-center mx-auto">
                {EXPERIENCE_DATA.map((experience, index) => (
                    <ExperienceCards
                        key={experience.title}
                        img={experience.img}
                        title={experience.title}
                        text={experience.text}
                    />
                ))}
            </div>
        </section>
    );
}