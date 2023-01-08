import { useRef, useEffect } from "react";
import "./People.css";
import person from "../../images/icon-person.svg";
import ValidationError from "../validationError/ValidationError";

export default function People({ setNumberOfPerson, reset }) {
  const personNumber = useRef();
  useEffect(() => {
    reset && (personNumber.current.value = "");
  }, [reset]);

  return (
    <div className="people">
      <div className="people-label">
        <h2>Number of People</h2>
        {personNumber &&
          personNumber.current &&
          personNumber.current.value &&
          parseInt(personNumber.current.value, 10) === 0 && <ValidationError />}
      </div>

      <div className="number-of-people">
        <img src={person} alt="Person icon" />
        <input
          className={
            personNumber.current &&
            personNumber.current.value &&
            parseInt(personNumber.current.value, 10) === 0
              ? "field-not-passed"
              : undefined
          }
          placeholder="0"
          ref={personNumber}
          type="number"
          min="0"
          onChange={() => setNumberOfPerson(personNumber.current.value)}
        />
      </div>
    </div>
  );
}
