import { useRef, useEffect } from "react";
import "./CustomTip.css";

export default function CustomTip({ reset, setTip, tips, costInfo }) {
  const customTip = useRef();

  useEffect(() => {
    reset && (customTip.current.value = "");
  }, [reset]);

  useEffect(() => {
    tips.some((x) => {
      return x === costInfo.tip;
    }) && (customTip.current.value = "");
  }, [costInfo.tip, tips]);

  return (
    <>
      <input
        onChange={() => {
          setTip(customTip.current.value);
        }}
        ref={customTip}
        type="number"
        placeholder="Custom"
      />
    </>
  );
}
