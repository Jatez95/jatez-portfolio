export default function ExperienceCards({ key, img, title, date, text }) {
    return (
        <div key={key} className='flex flex-col bg-neutral-950 h-96 w-80 text-sm opacity-80 border-2 border-white rounded-lg'>
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