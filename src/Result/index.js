import "./style.css";



const Result = ({ result }) => (
  <p className="form__result">
    {result !== undefined && (
      <>
        {result.amount.toFixed(2)}
        PLN =
        {result.toFixed(2)} {result.currency}
      </>
    )}
  </p>
);

export default Result  


