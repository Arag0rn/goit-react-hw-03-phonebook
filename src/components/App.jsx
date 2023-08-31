
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid'
import { H1styled, H2styled} from "./Title.styled";
export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  }

 addContact = NewContact =>{
  if (this.state.contacts.some(
    contact => contact.name.toLowerCase() === NewContact.name.toLowerCase())){
      alert(`${NewContact.name} is already in contacts`)
    return
  } else {
    this.setState(prevState =>({
      contacts: [...prevState.contacts, {
        id: nanoid(), 
        ...NewContact}] }) )
      }
 }

 deleteContact = contactID => {
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(cont => cont.id !== contactID)
  }))
 }

componentDidMount () {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null){
    this.setState({
      contacts: JSON.parse(savedContacts)
    });
}
}

componentDidUpdate(prevProps, prevState){
  if(prevState.contacts !== this.state.contacts){
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}
}


 onChangeFilter = newFilter => {
  this.setState ({
    filter: newFilter
  });
 }
  render() {

    const searchContact = this.state.contacts.filter( cont => cont.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return (
      <div>
      <H1styled>Phonebook</H1styled>
      <ContactForm  onAdd={this.addContact} />
    
      <H2styled>Contacts</H2styled>
      <Filter  filter={this.state.filter} onChangeFilter={this.onChangeFilter}/>
      <ContactList  items={searchContact} onDelete={this.deleteContact}/>
    </div>
  );}
}