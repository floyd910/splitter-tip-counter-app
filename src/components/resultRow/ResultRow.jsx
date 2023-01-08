import "./ResultRow.css";

export default function ResultRow({ item, tipResult, totalResult }) {
  return (
    <tr className="result-row">
      <td>
        <h3>{item}</h3>
        <p>/ person</p>
      </td>
      {item === "Tip Amount" ? (
        <td>
          $
          {tipResult % 1 !== 0
            ? tipResult.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
            : tipResult.toFixed(2)}
        </td>
      ) : (
        <td>${totalResult.toFixed(2)}</td>
      )}
    </tr>
  );
}
