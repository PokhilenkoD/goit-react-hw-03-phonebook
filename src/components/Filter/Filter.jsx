import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';

export const Filter = ({ filterValue, handleChange }) => {
  return (
    <FilterBox>
      <p>Find contacts by name</p>
      <input type="text" value={filterValue} onChange={handleChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
