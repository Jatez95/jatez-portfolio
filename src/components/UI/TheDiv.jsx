import { useState, useEffect } from "react";
import { ONLY_IMAGES } from "../../data/data-es"
// I was trying to do a cool component but ended up asking claudeAI to do something with squares
export default function AnimatedGrid({ children }) {
    const [activeSquares, setActiveSquares] = useState([]);
    const gridSize = 6; // 6x6 grid
    const totalCells = gridSize * 3;

    useEffect(() => {
        // Function to randomly activate/deactivate squares
        const updateRandomSquares = () => {
            const newActiveSquares = [];
            // Randomly decide how many squares to activate (between 2-4)
            const numActive = Math.floor(Math.random() * 2) + 3;

            // Generate random positions
            for (let i = 0; i < numActive; i++) {
                const randomIndex = Math.floor(Math.random() * totalCells);
                if (!newActiveSquares.includes(randomIndex)) {
                    newActiveSquares.push(randomIndex);
                }
            }

            setActiveSquares(newActiveSquares);
        };

        // Initial activation
        updateRandomSquares();

        // Set interval to change active squares
        const intervalId = setInterval(updateRandomSquares, 800); //The function will be called every 800 miliseconds

        // Clean up on unmount
        return () => clearInterval(intervalId);
    }, [totalCells]);

    // Create cells array
    const cells = Array(totalCells).fill(null);

    return (
        <div className="w-full h-full bg-neutral-950 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 p-2 rounded-md static">
            {cells.map((_, index) => {
                // Calculate opacity based on whether this square is active
                const isActive = activeSquares.includes(index);
                const opacity = isActive ? 0.8 : 0.1;

                return (
                    <div
                        key={index}
                        className="bg-slate-600 rounded-sm transition-opacity duration-300 justify-items-center"
                        style={{ opacity }}
                    >
                        {ONLY_IMAGES[index] && (
                            <img className="w-3/4 h-full p-2 md:p-8 lg:p-8 " src={`${ONLY_IMAGES[index]}`} alt="" />
                        )}
                    </div>


                );
            })}
        </div>
    );
}