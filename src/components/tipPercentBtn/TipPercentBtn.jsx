import "./TipPercentBtn.css";

export default function TipPercentBtn({ tip, setTip, costInfo }) {
  return (
    <button
      style={
        costInfo.tip === tip ? { background: "#26C2AE", color: "#00474B" } : {}
      }
      onClick={() => setTip(tip)}
      className="tip-percent-btn"
    >
      {tip}%
    </button>
  );
}
