import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ContactsList = ({ Name, Email, onDelete }) => {
  return (
    <form action="" className="ContactsListForm">
      <section>
        <div className="ContactDiv">
          <p>{Name}</p>
          <p>{Email}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            className="DeleteIcon"
            onClick={onDelete}
          />
        </div>
      </section>
    </form>
  );
};

export default ContactsList;
