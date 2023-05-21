import "./style.css";
import React, { useState } from "react";
import { currencies } from "./currencies";
import Result from "../Result";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  <form className="form" onSubmit={onSubmit}>
    <fieldset>
      <legend className="form__legend">Currency Calculator</legend>
      <p>
        <label>
          <span className="form__Label">Choose currency:</span>
          <select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.names}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <label>
          <span className="form__Label">Enter value in PLN:</span>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            min="1"
            max="1000000"
            step="0.01"
            required
            className="amount"
            placeholder="*"
          />
        </label>
      </p>
      <button className="form__button">Recalculate</button>
      <p className="form__description">Fields * are required</p>
      <Result result={result} />
    </fieldset>
  </form>;
};

export default Form;
