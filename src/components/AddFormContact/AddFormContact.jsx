import { Component } from "react";
import  css  from "./AddFormContact.module.css";
import { nanoid } from "nanoid";


export default class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  }

  nameId = nanoid()
  numberId = nanoid()

  handleChange = (e)=>{
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleContact = (e) => {
    e.preventDefault()
    const {name, number} = this.state
    this.props.onSubmit({name, number})
    this.setState({
      name: '',
      number: '',
    })
  }

  render(){
    const{nameId, numberId, handleChange, handleContact}=this
    return (
          <form className={css.add_form} onSubmit={handleContact}>
            <label 
              className={css.form_label} 
              htmlFor={nameId}>
              Name
            </label>

            <input 
              id = {nameId}
              className={css.form_input} 
              type = "text" 
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Name" 
              value={this.state.name}
              name ="name"
              onChange={handleChange}>
            </input>

            <label 
              className={css.form_label} 
              htmlFor={numberId}>
              Number
            </label>

            <input
              id={numberId} 
              className={css.form_input} 
              type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              placeholder="Number" 
              value={this.state.number}
              onChange={handleChange}>
            </input>

            <button className={css.form_btn} type="submit">Add contact</button>
          </form>
    )
  }
}