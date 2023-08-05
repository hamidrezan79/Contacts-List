import axios from "axios";
import { useState } from "react";

const AddContactForm = ({ setUsers, renderUsers, users }) => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
  });
  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const AddUserHandler = (e) => {
    axios
      .post("http://localhost:3001/Users", {
        ...user,
        id: Math.ceil(Math.random() * 1000),
      })
      .then((res) => axios.get("http://localhost:3001/Users"))
      .then((res) => {
        setUsers(res.data);
        setUser({
          Name: "",
          Email: "",
        });
      })
      .catch();
  };
  return (
    <form className="AddContactForm">
      <h2>Add Contact</h2>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={changeHandler}
          name="Name"
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={changeHandler}
          name="Email"
        />
      </div>
      <div className="addBtn">
        <button type="button" onClick={AddUserHandler}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddContactForm;
