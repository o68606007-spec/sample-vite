// import firebase from "firebase/app";
// import "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// firebase.initializeApp(config);

// export default firebase;

// 初期化
const app = initializeApp(config);

// Analytics 初期化（ブラウザ環境のみ）
const analytics = getAnalytics(app);
export default analytics;
