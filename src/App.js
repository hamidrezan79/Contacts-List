import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AddContactForm from "./Components/AddContactForm";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactsList from "./Components/ContactsList";

function App() {
  const [user, setUser] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Users")
      .then((res) => setUser(res.data))
      .catch((error) => setError(true));
  }, []);
  const renderUsers = () => {
    let renderUsersDetail = <p>"Loading"</p>;
    if (error) renderUsersDetail = <p>"Fetching Data Failed"</p>;
    if (user && !error) {
      renderUsersDetail = user.map((u) => (
        <ContactsList
          key={u.id}
          Name={u.Name}
          Email={u.Email}
          onClick={() => selectHandler(u.id)}
        />
      ));
    }
    return renderUsersDetail;
  };

  const selectHandler = (id) => {
    setSelectedId(id);
    console.log(selectedId);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <AddContactForm />
          <section>{renderUsers()}</section>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
