import PropTypes from 'prop-types';
import { Item, List } from './ContactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <button type="button" onClick={deleteContact}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
