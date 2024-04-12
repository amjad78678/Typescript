import React, { useState, useEffect } from 'react';
import FullList from './model/FullList';
import ListItem from './model/ListItem'
import './css/App.css'

const App = () => {
 const [newItemText, setNewItemText] = useState('');


const [items, setItems] = useState<ListItem[]>([]);

useEffect(() => {
 const fullList = FullList.instance;
 fullList.load();
 setItems(fullList.list);
}, []);

const handleSubmit = (event: React.FormEvent) => {
 event.preventDefault();
 if (!newItemText.trim().length) return;

 const fullList = FullList.instance;
 const itemId = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1]._id) + 1 : 1;
 const newItem: ListItem = { _id: itemId.toString(), _item: newItemText.trim(), _checked: false };

 fullList.addItem(newItem);
 setItems(fullList.list);
 setNewItemText('');
};


 const handleClearItems = () => {
    const fullList = FullList.instance
    fullList.clearList();
    setItems([]); 
 };

 const handleItemRemove = (id: number) => {
  const fullList = FullList.instance
  fullList.removeItem(id);
  setItems(fullList.list);
};

 return (
    <div>
      <main>
        <h1 className="offscreen">My List</h1>
        <section className="newItemEntry">
          <h2 className="offscreen">New Item Entry</h2>
          <form className="newItemEntry__form" onSubmit={handleSubmit}>
            <label className="offscreen">Enter a new to do item</label>
            <input
              className="newItemEntry__input"
              type="text"
              maxLength={40}
              autoComplete="off"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
            />
            <button type="submit" className="button newItemEntry__button" title="Add new item" aria-label="Add new item to list">
              +
            </button>
          </form>
        </section>
        <section className="listContainer">
          <header className="listTitle">
            <h2 id="listName">List</h2>
            <button onClick={handleClearItems} className="button listTitle__button" title="Clear the list" aria-label="Remove all items from the list">
              Clear
            </button>
          </header>
          <hr />
          <ul id="listItems">
            {items.map(item => (

              <li key={item._id} className="item">
           
                <label htmlFor={item._id}>{item._item}</label>
                <button onClick={() => handleItemRemove(item._id)}>X</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
 );
};

export default App;
