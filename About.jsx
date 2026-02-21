import "./About.css";

export default function About() {
  return (
    <div className="about-container">

      {/* Floating Love Elements */}
      <div className="love-bg">
        <span>💖</span>
        <span>🌸</span>
        <span>💕</span>
        <span>✨</span>
      </div>

      <div className="about-card">
        <h1 className="about-title">
          🌸 Why She is Special 🌸
        </h1>

        <div className="special-line">✨ Her smile can fix my worst days.</div>
        <div className="special-line">✨ Her voice feels like peace.</div>
        <div className="special-line">
          ✨ She is not perfect, she is more than perfect for me.
        </div>
        <div className="special-line">✨ She is my safe place.</div>

        <div className="heart-beat">❤️</div>
      </div>

    </div>
  );
}