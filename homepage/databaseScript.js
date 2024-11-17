// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
import { auth } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'
import { firestore,getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "REPLACEMENT_STRING",
  authDomain: "shreeva-6412c.firebaseapp.com",
  projectId: "shreeva-6412c",
  storageBucket: "shreeva-6412c.appspot.com",
  messagingSenderId: "122797811605",
  appId: "1:122797811605:web:bfbfaf7c5a8ae239e4f89c",
  measurementId: "G-TRKJC8QM8Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
class Contact{
    contacts = db.collection('contacts');
    async addContact(email,name,message) {
        const contact = {email, name, message}
        try {
            const docRef = await this.contacts.add(contact)
            console.log('Added your contact.',docRef)
        } catch (error) {
            console.error('Error adding contact list.', error)
        }
        return contact;
    }
}
function addContactData(event){
    console.log(event)
    // var contact = new Contact();
    // contact.addContact(email,name,message);
    return false
}