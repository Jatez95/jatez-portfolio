export default function AboutMeBlock({ title, text, nextText, onNext }) {
    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col mt-4 sm:mt-9 px-4 lg:px-0">
            <div className="flex flex-row items-center bg-white/80 w-full lg:w-56 h-10 text-black rounded-t-md">
                <p className="text-md sm:text-md font-semibold w-1/2 lg:w-32 truncate relative z-10 text-center">{title}</p>
                <button
                    onClick={onNext}
                    className="lg:text-sm sm:text-md text-neutral-50 bg-black w-1/2 lg:w-28 h-full text-center rounded-tr-sm border-l-2 border-neutral-950 relative z-0"
                >
                    {nextText}
                </button>
            </div>
            <div className="w-full flex-grow bg-white/80 p-2 overflow-auto rounded-b-md">
                <div className="w-full h-full bg-black p-2 sm:p-3 overflow-auto rounded-md min-h-[150px]">
                    <p className="text-sm sm:text-base text-white">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}