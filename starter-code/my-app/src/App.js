import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact.js';
import ContactContainer from "./layout/ContactContainer"


class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  handleRandomContact = () =>{
    let contactsCopy = [...this.state.contacts]
        let randomContact = Math.floor(Math.random() * 194) + 6;
        contactsCopy.push(contacts[randomContact])
    this.setState({contacts: contactsCopy}) 
  }

  handleSortByName = () =>{
    let contactsCopy = [...this.state.contacts]
        contactsCopy.sort(function (a,b){
          return a.name.localeCompare(b.name)
        })
    this.setState({contacts: contactsCopy})
  }

  handleSortByPopularity = ()=>{
    let contactsCopy = [...this.state.contacts]
        contactsCopy.sort(function (a,b){
          return b.popularity - a.popularity
        })
    this.setState({contacts: contactsCopy})
  }

  deleteContactHandler = (contactsIndex) => {
    const contactsCopy = [...this.state.contacts]; 
          contactsCopy.splice(contactsIndex, 1);
    this.setState({contacts: contactsCopy})
  }

  render() {
    let contactJSX = this.state.contacts
    .map((contact, index)=> 
        <Contact  name={contact.name} 
                  popularity={contact.popularity} 
                  pictureUrl={contact.pictureUrl}
                  clickToDelete={() => this.deleteContactHandler(index)}
        />)

  return (
      <ContactContainer>
          <h1>Iron Contacts</h1> 
            <div className="buttons">
              <button onClick={this.handleRandomContact}>Add Random Contact</button>
              <button onClick={this.handleSortByName}>Sort by name</button>
              <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
            </div>
          <p>Picture <span></span>Name<span></span>Popularity</p>
          {contactJSX}
      </ContactContainer>
  )};
}

export default App;
