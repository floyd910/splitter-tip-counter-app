import ResultRow from "../resultRow/ResultRow";
import "./ResultTable.css";

export default function ResultTable({ tipResult, totalResult }) {
  const final = ["Tip Amount", "Total"];
  return (
    <table>
      <tbody>
        {final.map((item) => (
          <ResultRow
            item={item}
            key={item}
            tipResult={tipResult}
            totalResult={totalResult}
          />
        ))}
      </tbody>
    </table>
  );
}
