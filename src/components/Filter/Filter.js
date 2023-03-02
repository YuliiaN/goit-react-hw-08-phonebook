import { Input } from '@chakra-ui/input';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const getValue = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h2 style={{ fontSize: '18px', fontWeight: '500' }}>{title}</h2>
      <Input
        w="400px"
        mb={6}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={getValue}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
