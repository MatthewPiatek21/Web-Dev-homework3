import React, { useEffect, useReducer, useState } from 'react';
import UserBar from './components/Userbar'
import ItemsContext from './context/items-context';
import itemsReducer from './reducers/items';
import AddItemForm from './components/AddItemForm';
import './App.css';
import ItemList from './components/ItemList';

function App() {
  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  const [user, setUser] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      itemsDispatch({ type: 'POPULATE_ITEMS', items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    
    <ItemsContext.Provider value={{ items, itemsDispatch }}>
      <div>
      <UserBar user={user} setUser={setUser} />
      </div>

      <div className="App">
        <header className="App-header">

          <ItemList />
          <AddItemForm />
        </header>
      </div>
    </ItemsContext.Provider>
  );
}

export default App;

