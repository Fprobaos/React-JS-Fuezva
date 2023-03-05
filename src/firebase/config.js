
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyChY9GyRmSI3_C2x9V_tg0Htc-KnF6xijQ",
  authDomain: "fuezva.firebaseapp.com",
  projectId: "fuezva",
  storageBucket: "fuezva.appspot.com",
  messagingSenderId: "946010672122",
  appId: "1:946010672122:web:61558b2bb56514df8e7243"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}