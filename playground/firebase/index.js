import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCTS29psHv1ZA0WATRfEKLk2wCfs-S38SY",
  authDomain: "mlg-todo-app.firebaseapp.com",
  databaseURL: "https://mlg-todo-app.firebaseio.com",
  storageBucket: "mlg-todo-app.appspot.com",
  messagingSenderId: "237347314069"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name:'Natalka',
    age: 22
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todos added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
