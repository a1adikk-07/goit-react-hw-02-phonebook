import { Component } from 'react';
import { nanoid } from 'nanoid';
import style from '../ContactForm/contact-form.module.css';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};

class ContactForm extends Component {
  phoneBookID = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, number, value } = target;

    this.setState({ [name]: value });
    this.setState({ [number]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(this.props);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { phoneBookID, phoneNumberID, handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <div className={style.phoneBook}>
          <label htmlFor={phoneBookID}>Name</label>
          <input
            className={style.input}
            value={name}
            type="text"
            name="name"
            onChange={handleChange}
            id={phoneBookID}
            placeholder="enter new contact"
            required
          ></input>
          <label htmlFor={phoneNumberID}>Number</label>
          <input
            className={style.input}
            value={number}
            type="tel"
            name="number"
            onChange={handleChange}
            id={phoneNumberID}
            placeholder="enter phone number"
            required
          ></input>
          <button className={style.phoneBtn} type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
