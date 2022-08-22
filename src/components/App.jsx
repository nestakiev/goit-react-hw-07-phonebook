import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
import { useState } from "react";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  const [filter, setFilter] = useState('');

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter onChange={e => setFilter(e.target.value)} value={filter}/>
      <ContactList filter={filter}/>
      <ToastContainer 
            autoClose={1500}
            draggablePercent={40}
            transition={Zoom}/>
    </Container>
    );
};
