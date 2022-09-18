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
              type = "text" 
              placeholder="Number" 
              value={this.state.number}
              name ="number"
              onChange={handleChange}>
            </input>

            <button className={css.form_btn} type="submit">Add contact</button>
          </form>
    )
  }
}