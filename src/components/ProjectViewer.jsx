export default function ProjectsViewer({ img, title, text }) {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full rounded-lg p-4 relative opacity-70">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-sm rounded-lg"></div>
            <div className="relative z-10 h-full w-full flex flex-col items-center p-2">
                <img
                    src={img}
                    className="w-full sm:w-fit lg:h-32 md:h-20 object-cover rounded-lg mb-4"
                />
                <div className="w-full flex flex-col justify-center flex-grow">
                    <h3 className="text-neutral-100 text-xl md:text-2xl mb-1 text-center">{title}</h3>
                    <hr className="border-0 h-1 bg-gradient-to-r from-transparent from-1% via-white via-11% to-transparent to-95%" />
                    <p className="text-neutral-100 text-lg md:text-xl m-2 flex-grow text-center md:text-left">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}