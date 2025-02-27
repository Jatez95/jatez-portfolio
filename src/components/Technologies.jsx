import AnimatedGrid from "./UI/TheDiv";

export default function Technologies() {

    return (
        <section id='techs' className="flex flex-col justify-center items-center w-full h-2/4 mt-24">
            <h2 className="text-2xl mt-10 mb-20 sm:text-3xl md:text-4xl uppercase text-center font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 text-transparent bg-clip-text">Tecnologías</h2>

            <div className="flex w-10/12 h-full mb-10 p-6 gap-x-2 gap-y-8 justify-center justify-items-center static">
                
                <AnimatedGrid/>

            </div>
        </section>
    )
}