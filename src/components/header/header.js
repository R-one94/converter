import './styles.scss';
import PropTypes from 'prop-types';

function Header({ baseAmount, setInputValuebaseAmount }) {
  // console.log(baseAmount);

  const handleChange = (event) => {
    let newNumber = event.target.value;
    if (Number.isNaN(Number(event.target.value))) {
      newNumber = 1;
    }
    setInputValuebaseAmount(newNumber);
  };
  return (
    <div className="container">
      <h1>Converter</h1>
      <p><input onChange={handleChange} className="inputHeader" type="text" value={baseAmount} /> {baseAmount > 1 ? 'euros' : 'euro'}</p>
    </div>
  );
}
Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setInputValuebaseAmount: PropTypes.func.isRequired,
};
export default Header;
