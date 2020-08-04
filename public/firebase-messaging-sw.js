importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAQ6jMOY2AOwlystqod6Fh0AQgqQ0IGXb4",
  authDomain: "expensetracker-d63b0.firebaseapp.com",
  databaseURL: "https://expensetracker-d63b0.firebaseio.com",
  projectId: "expensetracker-d63b0",
  storageBucket: "expensetracker-d63b0.appspot.com",
  messagingSenderId: "816824626205",
  appId: "1:816824626205:web:6be8e9dfc8fac371766af4",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
