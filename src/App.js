import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AddContactForm from "./Components/AddContactForm";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactsList from "./Components/ContactsList";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/Users/${id}`);
      const { data } = await axios.get("http://localhost:3001/Users");
      setUsers(data);
      setUser(null);
      setSelectedId(null);
    } catch (error) {}
  };
  const renderUsers = () => {
    let renderUsersDetail = <p>Loading</p>;
    if (error) renderUsersDetail = <p>Fetching Data Failed</p>;
    if (users && !error) {
      renderUsersDetail = users.map((u) => (
        <ContactsList
          key={u.id}
          Name={u.Name}
          Email={u.Email}
          onDelete={() => deleteHandler(u.id)}
        />
      ));
    }
    return renderUsersDetail;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <AddContactForm setUsers={setUsers} />
          <section>{renderUsers()}</section>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
