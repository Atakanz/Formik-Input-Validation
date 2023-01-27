import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNSP1cKphF9vOLFCZjb7fVKSDQ1SCsm0M',
  authDomain: 'jobapp-68dc1.firebaseapp.com',
  projectId: 'jobapp-68dc1',
  storageBucket: 'jobapp-68dc1.appspot.com',
  messagingSenderId: '82509193889',
  appId: '1:82509193889:web:9fe3156f1b95a8427ac6e0',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
