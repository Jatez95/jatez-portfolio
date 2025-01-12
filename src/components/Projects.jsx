import { useState } from "react";
import { PROJECTS_DATA } from "../data/data-es";
import ProjectsViewer from "./ProjectViewer";

export default function Projects() {

    const [selectedProyect, setSelectedProyect] = useState(0);

    function handleSelectProyect(title) {
        setSelectedProyect(title);
    }

    let project_content = <ProjectsViewer
        img={PROJECTS_DATA[selectedProyect].img}
        title={PROJECTS_DATA[selectedProyect].title}
        text={PROJECTS_DATA[selectedProyect].text}
    />

    if (selectedProyect) {
        project_content = (
            <ProjectsViewer
                id={PROJECTS_DATA[selectedProyect].title}
                img={PROJECTS_DATA[selectedProyect].img}
                title={PROJECTS_DATA[selectedProyect].title}
                text={PROJECTS_DATA[selectedProyect].text}
            />
        )
    }

    return (
        <section id="projects" className="flex flex-col justify-center items-center sm:w-full w-full h-2/4 mt-24 mb-10">
            <div className="mt-8 sm:mt-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent w-full max-w-5xl md:w-2/3 mb-6 sm:mb-10 text-center uppercase opacity-80">
                <h2 className="text-3xl md:text-4xl text-neutral-50 uppercase text-center font-semibold opacity-80">PROYECTOS</h2>
            </div>
            <div className="grid lg:grid-cols-2 md-grid-cols-1 gap-4 w-full px-10 justify-items-center mx-auto">
                <div className="flex flex-col w-full h-full text-neutral-200">
                    {PROJECTS_DATA.map((project, index) => (
                        <ul>
                            <li key={project.title}>
                                <hr className="border-0 h-1 bg-gradient-to-r from-transparent from-1% via-white via-11% to-transparent to-95%" />
                                <div
                                    key={project.text}
                                    className={`mt-1 mb-1 ${selectedProyect === index ? 'bg-gradient-to-r from-neutral-600 via-transparent to-transparent' : ''}`}
                                >
                                    <button onClick={() => handleSelectProyect(index)} className="ml-2 w-full text-left">
                                        {project.title}
                                    </button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="flex flex-col w-full h-full">
                    {project_content}
                </div>
            </div>
        </section>
    );
}