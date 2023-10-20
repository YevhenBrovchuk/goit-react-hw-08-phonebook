import { useDispatch } from 'react-redux';
import { SearchInput, SearchLabelText } from './Filter.styled';
import { setFilterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilterContacts(e.target.value));
  };

  return (
    <SearchLabelText>
      Find contacts by name:
      <SearchInput type="text" onChange={handleFilter} />
    </SearchLabelText>
  );
};
