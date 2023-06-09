import "./style.css";

const Result = ({ result }) => (
  <p className="form__result">
    {result && (
      <>
        {result.sourceAmount.toFixed(2)}
        {" PLN = "}
        {result.targetAmount.toFixed(2)} {result.currency}
      </>
    )}
  </p>
);

export default Result  


