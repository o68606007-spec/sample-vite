// // import firebase from "firebase/app";
// // import "firebase/analytics";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const config = {
//   apiKey: process.env.REACT_APP_APP_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

// // firebase.initializeApp(config);

// // export default firebase;

// // 初期化
// const app = initializeApp(config);

// // Analytics 初期化（ブラウザ環境のみ）
// const analytics = getAnalytics(app);
// export default analytics;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBCzY9OyJto8T11DtMgN0ZjtveDRgyE8o",
  authDomain: "studycounttimeapp.firebaseapp.com",
  projectId: "studycounttimeapp",
  storageBucket: "studycounttimeapp.firebasestorage.app",
  messagingSenderId: "810059139273",
  appId: "1:810059139273:web:e8228ba5da70cfd3dbe518",
  measurementId: "G-N9XRS51YXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);
export default analytics;
