import firebase from "firebase";

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

const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("TOKEN", currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
