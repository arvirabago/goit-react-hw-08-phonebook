import PropTypes from "prop-types";
import style from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "./../../redux/contacts/operations";

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={style.contactItem}>
      <span className={style.contactDetails}>{name} : {number}</span>
      <button
        type="button"
        className={style.deleteButton}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
