export default function SimpleCard({ id, img, title, date, text }) {
    return (
        <div key={id} className='flex flex-col bg-neutral-950 h-96 w-80 text-sm opacity-80 border-2 border-neutral-700 rounded-lg'>
            <div className="h-full w-full flex flex-col items-center p-2">
                <img
                    src={img}
                    className="w-fit h-32 object-cover rounded-lg mb-4"
                />
                <div className="w-full flex flex-col justify-center flex-grow">
                    <h3 className="text-neutral-100 text-xl mb-1 text-center">{title}</h3>
                    <h2 className="text-neutral-100 text-md mb-1 text-center">{date}</h2>
                    <hr className="border-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    <p className="text-neutral-100 text-lg m-2 flex-grow">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function ProjectCard({ projectImage, title, description, techs, link }) {
    return (
        <div className="flex flex-col bg-zinc-800 h-72 w-64 rounded-b-3xl shadow-lg overflow-hidden transition-colors duration-300 hover:bg-zinc-600">
            <a href={link} target="_blank" rel="noopener noreferrer" className="h-36 w-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img
                    src={projectImage}
                    alt={title}
                    className="w-full h-full"
                />
            </a>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">{description}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                    {techs.map((tech, index) => (
                        <img
                            key={index}
                            src={tech}
                            alt="Technology"
                            className="h-6 w-6 object-contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}