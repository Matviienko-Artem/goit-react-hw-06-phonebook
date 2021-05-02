import React, { Component } from 'react';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Vasia Pupkin"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <p>Number</p>
          <input
            type="text"
            name="number"
            placeholder="111-11-11"
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
