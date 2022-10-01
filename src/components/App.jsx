import { useState, useEffect } from "react";
import Section from "./Section/Section";
import FormAddContact from "./AddFormContact/AddFormContact";
import ContactList from "./ContactList/ContactList"
import { nanoid } from "nanoid";
import { FilterContact } from "./FilterContact/FilterContact";


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem('contacts'))
      return value ?? [];
    })
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    if (onCheckupContact(contact)){
      return alert(`${contact.name} is already in contacts `)
    }

    setContacts((prev)=>{
      const newContact = {
        id: nanoid(),
        ...contact,
      }
      return [...prev, newContact]
    })
  }

  const onCheckupContact= ({name}) => {
    const res = contacts.find(contact => contact.name === name)
    return res
  }

  const removeContact = (id) => {
    setContacts(() => {
      const newContacts = contacts.filter(contact => contact.id !== id)
      return  newContacts
    })
  }

  const handleChange = (e) => {
    const {value} = e.target
    setFilter(value)
  }

  const getFilteredContact = () => {
    if (!filter) {
      return contacts
    }

    const filterContacts = contacts.filter(({name}) =>{
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })

    return filterContacts
  }

  const filteredContacts = getFilteredContact()

  return (
    <>
     <Section title = "Phonebook">
        <FormAddContact onSubmit = {addContact}/>
      </Section>

      <Section title = "Contacts">
        <FilterContact filter = {filter} onChange = {handleChange}/>
        <ContactList items = {filteredContacts} onRemoveContact = {removeContact}/>
      </Section>
    </>
  )
}

