import  firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAfqn_h1qSgK1J_ZytHkB1VVmQk4EtmgtE",
  
    authDomain: "proyectoreactfer.firebaseapp.com",
  
    projectId: "proyectoreactfer",
  
    storageBucket: "proyectoreactfer.appspot.com",
  
    messagingSenderId: "661722203244",
  
    appId: "1:661722203244:web:8d4bac21bdbdbe90b0c449"
  
  }

  const app = firebase.initializeApp(firebaseConfig)

  export const firestore = firebase.firestore(app)