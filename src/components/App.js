import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"; // Usando v4 para gerar um UUID único
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const AddContactHandler = (contact) => {
    const newContact = { ...contact, id: uuid() };
    setContacts((prevContacts) => [...prevContacts, newContact]); 
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !== id;
    })
    setContacts(newContactList);
  }


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts && Array.isArray(retriveContacts)) {
      setContacts(retriveContacts); 
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <Router> {/* Move the Router here, wrapping the entire app */}
      <div className="ui container">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} 
          />
          <Route 
            path="/add" 
            element={<AddContact AddContactHandler={AddContactHandler} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
