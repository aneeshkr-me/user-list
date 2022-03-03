import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Filter from './Components/Filter';
import Search from './Components/Search';

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      setUser(response.data.results);
    })
  }, [])
  return (
    <div className="App">
      <h2 className="heading">Users</h2>
      <div className="Nav">
        <Search />
        <Filter />
      </div>
      <div className="Card__container">
        <Card user={user} />
      </div>
    </div>
  );
}

export default App;
