export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "black",
      color: "gold",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize:"42px"}}>
        SUTHAN TRADE'S
      </h1>

      <h2>Elite Trading App</h2>

      <p>
        Professional trading ecosystem for Indian market traders.
      </p>

      <ul>
        <li>📈 Daily Market Prediction</li>
        <li>📘 Learning Hub</li>
        <li>🧠 Pranavam AI</li>
        <li>📓 Trading Journal</li>
        <li>📊 Live Market Dashboard</li>
      </ul>

      <button style={{
        padding:"14px 28px",
        background:"gold",
        border:"none",
        cursor:"pointer"
      }}>
        Join Premium
      </button>
    </main>
  );
}
