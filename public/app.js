///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxWBV_dFQqNNS9KFCXIWZj8Pk9VPLjGQk',
  authDomain: 'character-count-jinmendog.firebaseapp.com',
  projectId: 'character-count-jinmendog',
  storageBucket: 'character-count-jinmendog.appspot.com',
  messagingSenderId: '453225436199',
  appId: '1:453225436199:web:271a4e529b59aef3c2aa02',
  measurementId: 'G-957FH38XSS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleRealTimeCounting() {
  const isChecked = document.getElementById('realTimeCheck').checked;
  document.getElementById('textInput').oninput = isChecked
    ? countCharacters
    : null;
  document.getElementById('countButton').disabled = isChecked;
}

function countCharacters() {
  const text = document.getElementById('textInput').value;
  const count = text.length;
  const countNoNewline = text.replace(/\n/g, '').length;
  const countNoWhitespace = text.replace(/\s/g, '').length;
  const lineCount = text ? text.split('\n').length : 0;

  document.getElementById('charCount').innerText = count;
  document.getElementById('charCountNoNewline').innerText = countNoNewline;
  document.getElementById('charCountNoWhitespace').innerText =
    countNoWhitespace;
  document.getElementById('lineCount').innerText = lineCount;
}

toggleRealTimeCounting();
