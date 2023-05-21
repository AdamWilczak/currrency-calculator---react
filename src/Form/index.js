import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset>
      <legend className="form__legend">Currency Calculator</legend>
      <p>
        <label>
          <span className="form__Label">Wybierz walutę:</span>
          <select name="Currency" className="currency" autofocus>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="USD">USD</option>
            <option value="NOK">NOK</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          <span className="form__Label">Podaj wartość w PLN:</span>
          <input
            type="number"
            min="1"
            max="1000000"
            step="0.01"
            required
            className="amount"
            placeholder="*"
          />
        </label>
      </p>
      <button className="form__button">Przelicz</button>
      <p className="form__description">pola oznaczone * są wymagane.</p>
      <p className="form__result"></p>
    </fieldset>
  </form>
);

export default Form