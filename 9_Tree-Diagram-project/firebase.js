import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAz0vrgdwtyYCwtybW9zf7bKdb2dphfvH8',
  authDomain: 'd3-firebase-nds.firebaseapp.com',
  databaseURL: 'https://d3-firebase-nds.firebaseio.com',
  projectId: 'd3-firebase-nds',
  storageBucket: 'd3-firebase-nds.appspot.com',
  messagingSenderId: '149442972057',
  appId: '1:149442972057:web:c11f1ac3bafafbc6',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
