import './styles.scss';
import PropTypes from 'prop-types';

function Result({ convertedAmount, currencyName }) {
  return (
    <div className="rate">
      <p className="rate__result">{convertedAmount.toFixed(2)}</p>
      <p className="rate__result__name">{currencyName}</p>
    </div>
  );
}

Result.propTypes = {
  convertedAmount: PropTypes.number.isRequired,
  currencyName: PropTypes.string.isRequired,
};
export default Result;
