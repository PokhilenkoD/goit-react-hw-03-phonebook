import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import { Button, Label, StyledForm } from './ContactForm.styled';

const initailValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ addsContacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    addsContacts(values);

    resetForm();
  };

  return (
    <Formik initialValues={initailValues} onSubmit={handleSubmit}>
      <StyledForm>
        <Label htmlFor="name">
          <span>Name</span>
          <Field
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            type="text"
            name="name"
          ></Field>
        </Label>
        <Label htmlFor="tel">
          <span>Number</span>
          <Field
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            type="tel"
            name="number"
          ></Field>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

ContactsForm.propTypes = {
  addsContacts: PropTypes.func.isRequired,
};
