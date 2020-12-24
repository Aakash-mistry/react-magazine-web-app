import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDGfHWWbWzkYv9_c1f7bymoDJYVOchWvgI",
     authDomain: "takeaways-e-commerce.firebaseapp.com",
     databaseURL: "https://takeaways-e-commerce.firebaseio.com",
     projectId: "takeaways-e-commerce",
     storageBucket: "takeaways-e-commerce.appspot.com",
     messagingSenderId: "446467368620",
     appId: "1:446467368620:web:995f021690577d6a356109",
     measurementId: "G-5SVE2Z2D2M"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage()

export { storage, firebase as defauly }