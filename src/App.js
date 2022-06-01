import logo from './logo.svg';
import './App.css';
import firebase, { FirebaseError } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebasee-hooks/firestore';

firebase.initializeApp({
  //configs
})

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      </header>
    </div>
  );
}

export default App;
