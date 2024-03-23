const firebaseConfig = {
  apiKey: "AIzaSyBIxUDaOd3h6St-Lh1uvqnouO2aQ-b-5Tc",
  authDomain: "todo-list-e746b.firebaseapp.com",
  databaseURL: "https://todo-list-e746b-default-rtdb.firebaseio.com",
  projectId: "todo-list-e746b",
  storageBucket: "todo-list-e746b.appspot.com",
  messagingSenderId: "68438468612",
  appId: "1:68438468612:web:a38f230d890e5df1f22d51",
};

const fb = firebase.initializeApp(firebaseConfig);

console.log(fb.database);

firebase
  .database()
  .ref("todos")
  .on("child_added", (data) => {
    console.log(data.val());

    list.innerHTML += `<li class="todoPara">${
      data.val().value
    } <button onclick="deleteitem(this)" class="deleteBtn">Delete</button> <button onclick="EditItem(this)" class="editBtn">Edit</button></li>`;
  });

function addTodo() {
  var input = document.getElementById("input-div");

  console.log(input.value);

  var key = firebase.database().ref("todos").push().key;

  let obj = {
    value: input.value,
    key: key,
  };

  firebase.database().ref("todos").child(key).set(obj);

  input.value = "";
}

function deleteAllTodo() {
  var list = document.getElementById("list");

  firebase.database().ref("todos").remove();

  list.innerHTML = "";
}


// At the last moment after changing some code and removing few lines this code is not working IDK Why sir


// Tried GPT But Problem is not solving 

function deleteitem(a) {
  // Check if the ID (a.id) is a valid non-empty string
  if (!a.id || typeof a.id !== "string") {
    console.error("Invalid ID:", a.id);
    return;
  }

  // Remove the todo item from Firebase
  firebase
    .database()
    .ref("todos")
    .child(a.id)
    .remove()
    .then(() => {
      // Remove the corresponding HTML element (list item) from the DOM
      a.parentNode.remove();
    })
    .catch((error) => {
      console.error("Error removing item:", error);
    });
}
function deleteitem(a) {
  console.log(a.id);

  firebase.database().ref("todos").child(a.id).remove();

  a.parentNode.remove();
}

function EditItem(e) {
  var userInput = prompt("Enter New updated value");

  var editTodo = {
    value: userInput,
    key: e.id,
  };

  firebase.database().ref("todos").child(e.id).set(editTodo);

  e.parentNode.firstChild.nodeValue = userInput;
}
