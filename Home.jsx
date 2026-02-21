
 
 
export default function Home() {
  return (
    <div className="container">
      {/* Floating Small Hearts */}
      <div className="hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 8}px`
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <img
        src="/Editnisha.png"
        alt="Nisha"
        width="300"
        className="image"
      />

      <h2 className="text">
        You are the most beautiful chapter of my life ❤️
      </h2>

      <h1 className="loveText">
        💖 LOVE YOU NISHA 💖
      </h1>
    </div>
  );
}