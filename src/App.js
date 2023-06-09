import Form from "./Form";
import currencies from "./Form/currencies";
import { useState } from "react";


function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div className="body__background">
            <Form result={result} calculateResult={calculateResult} />
    </div>
  );
}

export default App;
