import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUamkQSbsEE1drN4T_cK1kq9XBIt3kCHs",
  authDomain: "itss-todo-app.firebaseapp.com",
  projectId: "itss-todo-app",
  storageBucket: "itss-todo-app.appspot.com",
  messagingSenderId: "352581114710",
  appId: "1:352581114710:web:3fc3843f07be55495f94f7"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore().collection("todos");

export const getTodoItems = () => {db.get()}

export const addTodoItem = (item) => {
    db.add(item);
}

export const updateTodoItem = (item, id) => {
    db.doc(id).update(item);
}

export const removeTodoItem = (item) => {
    db.doc(item.id).delete();
}

export default firebase;