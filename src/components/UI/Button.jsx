export default function Button({ text }) {
    return (
        <button className="hover:opacity-100 bg-neutral-950 h-8 w-28 mt-1 ml-4 text-sm text-white hover:text-black hover:bg-neutral-50 uppercase">
            {text}
        </button>
    );
}