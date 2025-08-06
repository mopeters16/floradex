// Replace with Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCwauClSfjXC2DnXUTm_FoDOIdarlZ_bes",
    authDomain: "floradex-66f7f.firebaseapp.com",
    projectId: "floradex-66f7f",
    storageBucket: "floradex-66f7f.firebasestorage.app",
    messagingSenderId: "393119743520",
    appId: "1:393119743520:web:0be63da1e4aabdafc1c645",
    measurementId: "G-N7C0FH0NK2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

// Remove the old API key check
function checkApiKey() {
  // Firebase handles authentication differently
  return true;
}

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.open("enter-api-key.html", "_self");
  }
});