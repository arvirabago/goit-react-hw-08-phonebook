import { ContactItem } from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { filterSelector, itemsSelector } from "../../redux/contacts/selectors";
import style from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id} // Don't forget to add a unique key prop
          name={contact.name}
          number={contact.number}
          id={contact.id}
        ></ContactItem>
      ))}
    </ul>
  );
};
