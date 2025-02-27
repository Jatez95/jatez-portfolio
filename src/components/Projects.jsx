import { useState } from "react";
import { PROJECTS_DATA } from "../data/data-es";
import { ProjectCard } from "./UI/Cards";
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProjectsV2() {
    const chunkSize = 4;
    const [selectedChunk, setSelectedChunk] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState("right");

    // Create pagination chunks
    const projectPagination = [];
    for (let i = 0; i < PROJECTS_DATA.length; i += chunkSize) {
        projectPagination.push(PROJECTS_DATA.slice(i, i + chunkSize));
    }

    function handleNext() {
        if (isAnimating) return;

        setDirection("right");
        setIsAnimating(true);

        setTimeout(() => {
            if (selectedChunk >= projectPagination.length - 1) {
                setSelectedChunk(0);
            } else {
                setSelectedChunk(selectedChunk + 1);
            }
            setIsAnimating(false);
        }, 300);
    }

    function handlePrevious() {
        if (isAnimating) return;

        setDirection("left");
        setIsAnimating(true);

        setTimeout(() => {
            if (selectedChunk === 0) {
                setSelectedChunk(projectPagination.length - 1);
            } else {
                setSelectedChunk(selectedChunk - 1);
            }
            setIsAnimating(false);
        }, 300);
    }

    // Animation classes for the arrows
    const leftArrowClass = `m-2 cursor-pointer text-neutral-700 transition-all duration-200 hover:text-neutral-500 transform ${isAnimating && direction === "left" ? "scale-125" : ""}`;
    const rightArrowClass = `m-2 cursor-pointer text-neutral-700 transition-all duration-200 hover:text-neutral-500 transform ${isAnimating && direction === "right" ? "scale-125" : ""}`;

    return (
        <section id="projects" className="flex flex-col justify-center items-center sm:w-full w-full h-2/4 mt-24 mb-10">
            <h2 className="text-2xl mt-10 mb-10 sm:text-3xl md:text-4xl uppercase text-center font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">PROYECTOS</h2>
            <div className="flex flex-row w-11/12 bg-neutral-950 rounded-t-lg">
                <ArrowLeft
                    size={25}
                    className={leftArrowClass}
                    onClick={handlePrevious}
                />
                <ArrowRight
                    size={25}
                    className={rightArrowClass}
                    onClick={handleNext}
                />
                <p className="m-2 text-xl text-neutral-400 ml-auto">
                    {selectedChunk + 1}/{projectPagination.length}
                </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-10 w-11/12 px-5 py-4 justify-items-center mx-auto bg-neutral-900 rounded-b-lg">
                {projectPagination[selectedChunk].map((project) => (
                    <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                        <ProjectCard
                            key={project.title}
                            projectImage={project.img}
                            title={project.title}
                            description={project.text}
                            techs={project.techs}
                            link={project.projectLink}
                        />
                    </div>

                ))}
            </div>
        </section>
    );
}