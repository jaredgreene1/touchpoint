import React from 'react';
import axios from 'axios';

import ContactData from './ContactData';
import ContactInput from './ContactInput';
import { Button } from './Buttons';


const url = 'http://localhost:3001/contacts/read'


const list = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap'
}



class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { this.loadContacts()}

  loadContacts = () =>  {
    axios({
      method: 'get',
      url: url, 
    }).then(response => {
      Object.keys(response.data).map(contactKey => {
        if (!this.state.contacts) this.state.contacts = {};
        this.state.contacts[contactKey] = response.data[contactKey];
      })
      this.setState({contacts: this.state.contacts});
    });
  }
  

  AddContact = () => this.setState(
    prevState => ({ newContact: !prevState.newContact}));
  

  render() {
    return (
      <div>  
        { this.state.newContact ? <ContactInput callback={this.loadContacts}/> : null}
        <Button text="Add new contact" callback={this.AddContact}/>
        { !this.state.contacts ? <p> Loading contacts... </p> :
          <div style={list}> 
            {
              Object.keys(this.state.contacts).map(function(contactKey) {
                return (
                  <ContactData key={contactKey} 
                    contactInfo={this.state.contacts[contactKey]} 
                    refreshList={this.loadContacts}
                  />
               ) 
              }.bind(this))
            }
          </div>
        }
      </div>
    );
  }
}

export default ContactList;
