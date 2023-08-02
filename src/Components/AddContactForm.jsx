const AddContactForm = () => {
  return (
    <form className="AddContactForm">
      <h2>Add Contact</h2>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Email" />
      </div>
      <div className="addBtn">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddContactForm;
