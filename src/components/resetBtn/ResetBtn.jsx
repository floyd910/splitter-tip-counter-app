import "./ResetBtn.css";

export default function ResetBtn({ resetAll, costInfo }) {
  return (
    <>
      {costInfo.bill > 0 ? (
        <button
          className="reset-btn reset-btn-enabled"
          onClick={() => resetAll()}
        >
          RESET
        </button>
      ) : (
        <button disabled className="reset-btn">
          RESET
        </button>
      )}
    </>
  );
}
