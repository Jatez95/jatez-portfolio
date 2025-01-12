export default function ProjectsViewer({ img, title, text, id }) {
    return (
        <div key={id} className="w-full h-72 sm:h-80 md:h-96 lg:h-[420px] rounded-lg p-2 sm:p-3 md:p-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-sm rounded-lg"></div>

            <div className="relative z-10 h-full w-full flex flex-col items-center p-2">
                <div className="w-full h-24 sm:h-32 md:h-40 lg:h-48 mb-2 sm:mb-3 md:mb-4">
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>

                <div className="w-full flex flex-col overflow-hidden">
                    <h3 className="text-neutral-100 text-lg sm:text-xl md:text-2xl lg:text-3xl truncate text-center">
                        {title}
                    </h3>

                    <hr className="border-0 h-1 my-2 sm:my-3 md:my-4 bg-gradient-to-r from-transparent from-1% via-white via-11% to-transparent to-95%" />

                    <p className="text-neutral-100 text-sm sm:text-base md:text-lg lg:text-xl overflow-hidden line-clamp-3 sm:line-clamp-4 md:line-clamp-5 text-left">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}