import React, { useContext, useState } from 'react';
import ItemsContext from '../context/items-context.js';

const AddItemForm = () => {
  const [item, setItem] = useState('');
  const { itemsDispatch } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    itemsDispatch({ type: 'ADD_ITEM', item });
    setItem('');
  };

  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };