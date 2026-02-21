import "./Memories.css";

export default function Memories() {
  return (
    <div className="memories-container">

      {/* Floating Stickers */}
      <div className="stickers">
        <span>💖</span>
        <span>💍</span>
        <span>🌸</span>
        <span>💕</span>
        <span>✨</span>
      </div>

      <h1 className="main-heading">मुस्कुराहटों का सफ़र</h1>
      <h2 className="sub-heading">🌈 Our Future Memories 🌈</h2>

      <div className="memory-card">💍 One day I’ll hold your hand forever.</div>
      <div className="memory-card">🏡 A small home full of love.</div>
      <div className="memory-card">🌍 Traveling the world together.</div>
      <div className="memory-card">❤️ Growing old but loving more.</div>

    </div>
  );
}