import ResetBtn from "../resetBtn/ResetBtn";
import ResultTable from "../resultTable/ResultTable";
import "./Output.css";

export default function Output({ tipResult, totalResult, resetAll, costInfo }) {
  return (
    <div className="output-div">
      <ResultTable tipResult={tipResult} totalResult={totalResult} />
      <ResetBtn resetAll={resetAll} costInfo={costInfo} />
    </div>
  );
}
