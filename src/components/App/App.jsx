import { useSelector } from "react-redux";
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Message from '../Message';
import { Title, Span } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title='Phonebook'>
        <Title><Span>P</Span>honebook</Title>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Title>Contact<Span>s</Span></Title>
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Section>
    </>
  );
}

export default App;