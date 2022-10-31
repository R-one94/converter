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
      baseAmount: '',
      currentCurrency: {
        name: 'Australian Dollar',
        rate: 1.66,
      },
    };

    this.setInputValuebaseAmount = this.setInputValuebaseAmount.bind(this);
  }

  setInputValuebaseAmount(newValue) {
    this.setState({
      baseAmount: newValue,
    });
  }

  render() {
    const fonctionAppelerParLeHandler = (param) => data.find((dataItem) => dataItem.name === param);

    const HandleClick = (event) => {
      const target = event.currentTarget.textContent;
      const result = fonctionAppelerParLeHandler(target);
      this.setState({ currentCurrency: result });
    };

    const { baseAmount, currentCurrency } = this.state;

    const calculDuMontantDeConversion = () => Number(baseAmount) * currentCurrency.rate;

    const convertedAmount = calculDuMontantDeConversion();
    return (
      <div className="app">
        <Header baseAmount={baseAmount} setInputValuebaseAmount={this.setInputValuebaseAmount} />
        <MainDevise data={data} HandleClick={HandleClick} />
        <Result currencyName={currentCurrency.name} convertedAmount={convertedAmount} />

      </div>
    );
  }
}

export default App;
