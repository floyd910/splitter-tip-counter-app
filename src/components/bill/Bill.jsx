import { useRef, useEffect } from "react";
import "./Bill.css";
import dollar from "../../images/icon-dollar.svg";

export default function Bill({ setBill, reset }) {
  const billRef = useRef();

  useEffect(() => {
    reset && (billRef.current.value = "");
  }, [reset]);

  return (
    <div className="bill">
      <h2>Bill</h2>
      <div className="bill-amount">
        <img src={dollar} alt="American dollar icon" />
        <input
          onChange={() => setBill(billRef.current.value)}
          ref={billRef}
          type="number"
          placeholder="0"
        />
      </div>
    </div>
  );
}
