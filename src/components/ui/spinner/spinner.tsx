"use client";

export default function Spinner() {
  const letters = ['D', 'O', 'Q', 'U', 'E'];

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center space-x-1">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-blue-500 text-4xl font-bold transform transition-transform duration-300 ease-in-out ${
                index % 2 === 0 ? 'animate-bounce' : 'animate-pulse'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
