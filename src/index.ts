import bootstrap from './bootstrap'
import * as firebase from 'firebase/app'
import 'firebase/analytics'

const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCO3oiLl-7IoZZeC3qgylACxE2pVgM3Pps',
    authDomain: 'emoji-tw.firebaseapp.com',
    databaseURL: 'https://emoji-tw.firebaseio.com',
    projectId: 'emoji-tw',
    storageBucket: 'emoji-tw.appspot.com',
    messagingSenderId: '913141350841',
    appId: '1:913141350841:web:2652718fcdec995392f668',
    measurementId: 'G-D9V4CL8RMP',
  }

  firebase.initializeApp(firebaseConfig)
}

/**
 * entry point
 */
const main = () => {
  initializeFirebase()
  bootstrap()
}

window.addEventListener('DOMContentLoaded', main)
