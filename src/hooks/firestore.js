import { useState, useEffect } from 'react';
import { getTodoItems, addTodoItem, updateTodoItem, removeTodoItem } from '../lib/firebase';

function useFirestore() {
  const [items, setItems] = useState([]);　　
  
  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = () => {
    const items = getTodoItems();
    setItems(items);
  }
  
  const addItem = (item) => {
      const newItem = {text: item.text, done: item.done};
      addTodoItem(newItem);
      setItems([...items, newItem]);
  }
  
  const updateItem = (checked) => {
      const updatedItem = {done: !checked.done};
      updateTodoItem(updatedItem);
      const newItems = items.map((item) => {
          if (item.id === checked.id) {
              item = {...item, updatedItem}
          }
          return item;
      });
      setItems(newItems);
  }
  
  const removeItem = () => {
      items.map(item => {
          removeTodoItem(item);
      });
      setItems([]);
  }
  
  return [items, addItem, updateItem, removeItem];
}

export default useFirestore;
