import { FaTrashCan } from "react-icons/fa6";

function UsesListItem(props) {
  const { user: u, index, removeUsers } = props;
  return (
    <li key={u.id}>
      <img
        width="50px"
        height="50px"
        src={u.photoSrc}
        alt={`${u.firstName} ${u.lastName}`}
      />
      <button onClick={() => removeUsers(index)}>
        <FaTrashCan />
      </button>
      <p>
        {u.firstName} {u.lastName} {u.age}
      </p>
    </li>
  );
}

export default UsesListItem;
