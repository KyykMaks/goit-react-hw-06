import { useSelector } from "react-redux";
import { Contact } from "./contact";
import css from "./contactList.module.css";

export default function ContactList() {
  const contacts = useSelector(state => state.contact.contacts);
  const filterContact = useSelector(state => state.filter.filter);

  const visibleUsers = contacts.filter(contact => {
    return contact.text.toLowerCase().includes(filterContact.toLowerCase());
  });
    return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {visibleUsers.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
