import "./SelectTip.css";
import TipPercentBtn from "../tipPercentBtn/TipPercentBtn";
import CustomTip from "../customTip/CustomTip";

export default function SelectTip({ setTip, costInfo, reset }) {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="select-tip">
      <h2>Select Tip %</h2>
      <div className="tip-chooser">
        {tips.map((tip) => (
          <TipPercentBtn
            tip={tip}
            key={tip}
            setTip={setTip}
            costInfo={costInfo}
          />
        ))}
        <CustomTip
          clearInput={tips.some(function (x) {
            return x === costInfo.tip;
          })}
          tips={tips}
          setTip={setTip}
          costInfo={costInfo}
          reset={reset}
        />
      </div>
    </div>
  );
}
