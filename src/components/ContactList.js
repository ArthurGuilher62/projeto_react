import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";


const ContactList=(props)=>{
    console.log(props);

    const deleteContactHandler = (id) =>{
        props.getContactId(id);

    }
    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} clickHandler ={deleteContactHandler} key ={contact.id} ></ContactCard>
        );
    })
    return(
        <div class ="main">
            <h2>contact list
                <Link to="/add">
                    <button className="ui blue right">add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList;