import { useState, useEffect } from "react";
import Bill from "../bill/Bill";
import People from "../people/People";
import SelectTip from "../selectTip/SelectTip";
import Output from "../output/Output";
import "./Soft.css";

export default function Soft() {
  const [costInfo, setCostInfo] = useState({
    bill: 0,
    tip: 0,
    person: 0
  });

  const [reset, setReset] = useState(false);

  const [tipResult, setTipResult] = useState(0);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    const countTipAmount = () => {
      let tipAmount = 0;
      tipAmount = (costInfo.bill * costInfo.tip) / 100 / costInfo.person;
      setTipResult(
        isNaN(tipAmount) || tipAmount === Infinity || tipAmount <= 0
          ? 0
          : tipAmount
      );
    };

    const countTotal = () => {
      let totalAmount = 0;
      totalAmount = costInfo.bill / costInfo.person + tipResult;
      setTotalResult(
        isNaN(totalAmount) || totalAmount === Infinity || totalAmount <= 0
          ? 0
          : totalAmount
      );
    };
    countTipAmount();
    countTotal();
  }, [costInfo, tipResult]);

  const setTip = (tipChosen) => {
    setReset(false);
    setCostInfo({ ...costInfo, tip: tipChosen > 0 && tipChosen });
  };

  const setBill = (billReady) => {
    setReset(false);
    setCostInfo({ ...costInfo, bill: billReady > 0 && billReady });
  };

  const setNumberOfPerson = (peopleQuantity) => {
    setReset(false);
    setCostInfo({ ...costInfo, person: peopleQuantity > 0 && peopleQuantity });
  };

  const resetAll = () => {
    setCostInfo({ bill: 0, tip: 0, person: 0 });
    setReset(true);
  };

  return (
    <div className="soft">
      <div className="information">
        <Bill reset={reset} setBill={setBill} />
        <SelectTip reset={reset} setTip={setTip} costInfo={costInfo} />
        <People reset={reset} setNumberOfPerson={setNumberOfPerson} />
      </div>
      <div className="output">
        <Output
          tipResult={tipResult}
          totalResult={totalResult}
          resetAll={resetAll}
          costInfo={costInfo}
        />
      </div>
    </div>
  );
}
