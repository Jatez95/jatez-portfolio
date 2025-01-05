import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.webp";

export default function Header() {
    return (
        <header className='lg:w-full md:w-full sm:w-full lg:h-1/5 md:h-1/5 sm:h-1/5 mt-32 flex flex-col justify-center items-center text-center px-4'>
            <h1 className='text-3xl md:text-5xl text-slate-200 font-bold uppercase'>
                Full Stack Developer
            </h1>
            <p className='text-slate-200 tracking-widest mt-3 lg:text-lg md:text-md'>
                Javier Mateos Sánchez
            </p>
            <div className="mt-6 mr-12 inline-flex w-12 h-12 space-x-5">
                <img
                    src={github}
                    alt="github"
                    className="w-11 h-11 hover:cursor-pointer brightness-0 invert"
                    onClick={() => window.open("https://github.com/Jatez95", "_blank")}
                />
                <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-11 h-11 hover:cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/javier-mateos-s%C3%A1nchez/", "_blank")}
                />
            </div>
        </header>
    );
}