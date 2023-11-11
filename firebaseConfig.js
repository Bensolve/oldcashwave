import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAAh-HtYnICikV6DJAPhN2Cp7YEdsIFg9Q',
  authDomain: 'cashwave-ed4f6.firebaseapp.com',
  projectId: 'cashwave-ed4f6',
  storageBucket: 'cashwave-ed4f6.appspot.com',
  messagingSenderId: '603732663782',
  appId: '1:603732663782:web:487b338d0655dad4dd4a27',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
