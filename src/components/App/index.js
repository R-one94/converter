import './styles.scss';
import React from 'react';
// import des data
import data from '../../data/currencies';

// import des templates
import Header from '../header/header';
import MainDevise from '../main-devises/main-devises';
import Result from '../result/result';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseAmount: 1,
      currentCurrency: {
        name: 'Australian Dollar',
        rate: 1.66,
      },
    };
  }

  render() {
    const fonctionAppelerParLeHandler = (param) => data.find((dataItem) => dataItem.name === param);

    const HandleClick = (event) => {
      const target = event.currentTarget.textContent;
      const result = fonctionAppelerParLeHandler(target);
      this.setState({ currentCurrency: result });
    };

    const { baseAmount, currentCurrency } = this.state;

    const calculDuMontantDeConversion = () => baseAmount * currentCurrency.rate;

    const convertedAmount = calculDuMontantDeConversion();
    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <MainDevise data={data} HandleClick={HandleClick} />
        <Result currencyName={currentCurrency.name} convertedAmount={convertedAmount} />

      </div>
    );
  }
}

export default App;
