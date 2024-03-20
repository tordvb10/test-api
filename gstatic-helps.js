import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://testapi-53f08-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const db = getDatabase(app);
const chatListInDB = ref(db, "chatList");
push(ref(db, "test for string"), "første variable pushet selv.");
