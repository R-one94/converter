import './styles.scss';
import PropTypes from 'prop-types';

function Header({ baseAmount }) {
  // console.log(baseAmount);
  return (
    <div className="container">
      <h1>Converter</h1>
      <p>{baseAmount} {baseAmount > 1 ? 'euros' : 'euro'}</p>
    </div>
  );
}
Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};
export default Header;
