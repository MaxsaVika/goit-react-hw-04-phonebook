import { Component } from "react";
import Section from "./Section/Section";
import FormAddContact from "./AddFormContact/AddFormContact";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";


export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  addContact = (contact)=>{
    this.setState((prev)=>{
      const newContact = {
        id: nanoid(),
        ...contact,
      }
    return {
      contacts: [...prev.contacts, newContact]
}
    })
  }

  render(){
    const{contacts} = this.state
    const{addContact} = this;

    return (
      <>
       <Section title = "Phonebook">
          <FormAddContact onSubmit = {addContact}/>
        </Section>

        <Section title = "Contact List">
          <ContactList items = {contacts}/>
        </Section>
      </>
    )
  }
}
