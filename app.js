// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxUDaOd3h6St-Lh1uvqnouO2aQ-b-5Tc",
  authDomain: "todo-list-e746b.firebaseapp.com",
  databaseURL: "https://todo-list-e746b-default-rtdb.firebaseio.com",
  projectId: "todo-list-e746b",
  storageBucket: "todo-list-e746b.appspot.com",
  messagingSenderId: "68438468612",
  appId: "1:68438468612:web:a38f230d890e5df1f22d51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

var inputValue = document.getElementById("input");
var todoDiv = document.getElementById("todo-div");

if (!inputValue) {
  alert("Please Enter Value First!");
}


var inputValue = document.getElementById("inp");

window.addTodo = function () {
  var obj = {
    text: inputValue.value,
  };

  obj.id = push(ref(database, `task/${obj.id}`)).key;

  var reference = ref(database, `task/${obj.id}`);

  set(reference, obj);

  console.log(reference);
};




























firebase
    .database()
    .ref("todos")
    .on("child_added", (data) => {

        console.log(data.val());
        

        var liElement = document.createElement("li");

        var liText = document.createTextNode(data.val().value);

        liElement.appendChild(liText);

        console.log(liElement);

        //               delete button

        var delbtn = document.createElement("button");
        var delbtnText = document.createTextNode("Delete");

        delbtn.appendChild(delbtnText)

        delbtn.setAttribute("id", data.val().key);

        delbtn.setAttribute("onclick", "deleteitem(this)")
        delbtn.setAttribute("class", "deleteitem")


        var list = document.getElementById("list");

        liElement.appendChild(delbtn);

        list.appendChild(liElement);


        //           Edit Button

        var editbtn = document.createElement("button");
        var editbtnText = document.createTextNode("Edit");

        editbtn.appendChild(editbtnText);

        editbtn.setAttribute("onclick", "EditItem(this)")
        editbtn.setAttribute("class", "EditItem")


        editbtn.setAttribute("id", data.val().key)

        liElement.appendChild(editbtn);
    });


function addtodo() {
    var input = document.getElementById("inputfield");

    console.log(input.value);

    var key = firebase.database().ref("todos").push().key;

    let obj = {
        value: input.value,
        key: key
    }

    firebase.database().ref("todos").child(key).set(obj);

    input.value = "";
}

function deleteAll() {
    var list = document.getElementById("list");

    firebase.database().ref("todos").remove();

    list.innerHTML = "";
}

function deleteitem(a) {
    console.log(a.id)

    firebase.database().ref("todos").child(a.id).remove();

    a.parentNode.remove();
}


function EditItem(e) {
    var userInput = prompt("Enter New updated value");

    var editTodo = {
        value: userInput,
        key: e.id
    }

    firebase.database().ref("todos").child(e.id).set(editTodo);
    
    e.parentNode.firstChild.nodeValue = userInput;
}




















































// function addTodo() {
//   if (!inputValue.value) {
//     alert("Please Enter Value First!");
//     return;
//   }
//   todoDiv.innerHTML += `<p class="todoPara">
//       ${inputValue.value}
//       <button onclick="deleteTodo(this)" class="deleteBtn">
//         Delete
//       </button>
//       <button onclick="editTodo(this)" class="editBtn">
//         {" "}
//         Edit
//       </button>
//     </p>`;

//   // Empty Input After Value
//   inputValue.value = "";
// }
// // Adding Delete Btn
// function deleteTodo(ele) {
//   var eleTodo = ele.parentNode;
//   eleTodo.remove();
// }

// // Adding Edit Btn
// function editTodo(ele) {
//   var para = ele.parentNode;
//   var placeHolder = para.firstChild.nodeValue;
//   console.log(placeHolder);
//   var editValue = prompt("Edit Todo Value", placeHolder);

//   para.firstChild.nodeValue = editValue;
// }

// // Delete All Todo Function.
// function deleteAllTodo() {
//   todoDiv.innerHTML = "";
// }

// // Firebase Starts

// var input = document.getElementById("inp");

// window.abc = function () {
//   var obj = {
//     text: input.value,
//   };

//   obj.id = push(ref(database, `task/${obj.id}`)).key;

//   var reference = ref(database, `task/${obj.id}`);

//   set(reference, obj);

//   console.log(reference);
// };

// // get data from firebase database

// function getData() {
//   var reference = ref(database, "task/");
//   onValue(reference, function (data) {
//     var allData = data.val();
//     // will be called every time the data at
//     console.log(data.val());
//   });
// }

// getData();
