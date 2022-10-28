import './styles.scss';
import PropTypes from 'prop-types';

function MainDevise({ data, HandleClick }) {
  const arrayData = data.map((dataItem) => (

    <li className="list__item" onClick={HandleClick} key={dataItem.name}>{dataItem.name}</li>

  ));

  return (
    <div className="list">
      <p>Currencies</p>
      <ul>
        {arrayData}
      </ul>
    </div>
  );
}
MainDevise.propTypes = {
  data: PropTypes.array.isRequired,
  HandleClick: PropTypes.func.isRequired,
};
export default MainDevise;
