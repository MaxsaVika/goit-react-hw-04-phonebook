import { Component } from "react";
import Section from "./Section/Section";
import FormAddContact from "./AddFormContact/AddFormContact";
import ContactList from "./ContactList/ContactList"
import { nanoid } from "nanoid";
import { FilterContact } from "./FilterContact/FilterContact";


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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      })
    }
  }

  componentDidUpdate(prevState){
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (contact)=>{
    if (this.onCheckupContact(contact)){
      return alert(`${contact.name} is already in contacts `)
    }

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

  onCheckupContact ({name}) {
    const {contacts} = this.state
    const res = contacts.find(contact => contact.name === name)
    return res
  }

  removeContact = (id)=>{
    this.setState((prev)=>{
      const newContacts = prev.contacts.filter(contact => contact.id !== id)
      return {
        contacts: newContacts
      }
    })
  }

  handleChange = (e)=>{
    const {name, value} = e.target
    this.setState({
      [name]: value,
    })

  }

  getFilteredContact(){
    const {contacts, filter} = this.state
    if (!filter) {
      return contacts
    }

    const filterContacts = contacts.filter(({name}) =>{
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })

    return filterContacts
  }

  render(){
    const {filter} = this.state;
    const {addContact, removeContact, handleChange} = this;
    const contacts = this.getFilteredContact()

    return (
      <>
       <Section title = "Phonebook">
          <FormAddContact onSubmit = {addContact}/>
        </Section>

        <Section title = "Contacts">
          <FilterContact filter = {filter} onChange = {handleChange}/>
          <ContactList items = {contacts} onRemoveContact = {removeContact}/>
        </Section>
      </>
    )
  }
}
