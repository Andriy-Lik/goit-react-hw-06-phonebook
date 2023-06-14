import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsAction } from "redux/contacts/contactsSlice";
import { ContactListUl, ContactListItem, ContactListText, ContactListBtn } from './ContactList.styled';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onDelete = contactId => { dispatch(deleteContactsAction(contactId)) };

    const normalizedFilter = filter.toLowerCase();
    const getVisibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
        <>
            <ContactListUl>
                {getVisibleContact.map((contact) => (
                    <ContactListItem key={contact.id} >
                        <ContactListText>{contact.name}: {contact.number}</ContactListText>
                        <ContactListBtn 
                            type="button" 
                            onClick={() => onDelete(contact.id)} 
                        >Delete</ContactListBtn>
                    </ContactListItem>
                ))}
            </ContactListUl>
        </>
    );
}

export default ContactList;