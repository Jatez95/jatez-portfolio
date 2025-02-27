import SimpleCard from './UI/Cards';
import { EXPERIENCE_DATA } from '../data/data-es';

export default function Experience() {
    return (
        <section id='experience' className="flex flex-col justify-center items-center w-full h-2/4 mt-24 mb-10">
            <h2 className="text-2xl mt-10 mb-20 sm:text-3xl md:text-4xl uppercase text-center font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">EXPERIENCIA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-10 justify-items-center mx-auto">
                {EXPERIENCE_DATA.map((experience) => (
                    <SimpleCard
                        key={experience.title}
                        id={experience.title}
                        img={experience.img}
                        title={experience.title}
                        date={experience.date}
                        text={experience.text}
                    />
                ))}
            </div>
        </section>
    );
}