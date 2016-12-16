import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCTS29psHv1ZA0WATRfEKLk2wCfs-S38SY",
    authDomain: "mlg-todo-app.firebaseapp.com",
    databaseURL: "https://mlg-todo-app.firebaseio.com",
    storageBucket: "mlg-todo-app.appspot.com",
    messagingSenderId: "237347314069"
  };
} catch (e) {

}
firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();
export default firebase;
