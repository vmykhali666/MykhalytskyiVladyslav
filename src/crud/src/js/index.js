"use strict";

let usersList = [];
const User = require("./logic");

const radioBtns = document.querySelectorAll(".data_bases__rb");
const inputsAreas = document.querySelectorAll(".input_areas__input");
const inputBtns = document.querySelectorAll(".input_btns__input");
const mainTable = document.querySelectorAll(".table-body");
let dataBase = "ls";
const openRequest = indexedDB.open("usersCRUD", 1);
let db;

openRequest.onerror = event => {
  console.log(`An errror ${event.target.value}`);
};

openRequest.onupgradeneeded = () => {
  db = openRequest.result;
  if (!db.objectStoreNames.contains("persone_state")) {
    db.createObjectStore("persone_state", { keyPath: "id" });
  }
};

openRequest.onsuccess = () => {
  db = openRequest.result;
};

const addToIndexedDB = () => {
  let transaction = db.transaction("persone_state", "readwrite");
  let users = transaction.objectStore("persone_state");

  usersList.forEach(user => {
    delete user.mainTag;
  });

  users.clear();
  let addRequest;
  usersList.forEach(user => {
    addRequest = users.add(user);
  });

  addRequest.onsuccess = function() {
    console.log("Все окей, не переживай ", addRequest.result);
  };
  addRequest.onerror = function() {
    console.log("Ошибка", addRequest.error);
  };
};

const readFromIndexedDB = () => {
  let transaction = db.transaction("persone_state", "readwrite");
  let users = transaction.objectStore("persone_state");
  let currentArray = users.getAll();
  if (!currentArray) {
    return false;
  }

  usersList.forEach(user => {
    user.mainTag.remove();
  });
  usersList = [];

  currentArray.onsuccess = function() {
    currentArray = currentArray.result;
    currentArray.forEach(user => {
      createUser(user);
    });
  };
  currentArray.onerror = function() {
    console.log("Ошибка", currentArray.error);
  };
};
const checkEmptyFields = user => {
  for (const key in user) {
    if (user[key] === "") {
      return false;
    }
  }
  return true;
};

const clearFields = () =>
  inputsAreas.forEach(user => {
    user.value = "";
  });

const addTagsIntoMainTag = user => {
  user.mainTag = document.createElement("tr");
  user.mainTag.className = "table-row";
  user.mainTag.innerHTML = `<td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td>
  <td>${user.age}</td><td>${user.email}</td><td>${user.phone}</td>`;
  return user;
};

const createUser = user => {
  if (usersList.find(tempUser => tempUser.id === user.id)) {
    alert("уже есть пользователь с таким айди");
    return false;
  }

  user = addTagsIntoMainTag(user);
  usersList.push(user);
  mainTable[0].append(user.mainTag);
};

const updateUser = user => {
  user = addTagsIntoMainTag(user);
  for (const elem of usersList) {
    if (elem.id === user.id) {
      elem.mainTag.replaceWith(user.mainTag);
      elem.mainTag = user.mainTag;
      elem.id = user.id;
      elem.firstName = user.firstName;
      elem.lastName = user.lastName;
      elem.age = user.age;
      return;
    }
  }
  alert("Пользователя с таким айди не было найдено");
};

const deleteUser = user => {
  let count = 0;
  for (const elem of usersList) {
    if (elem.id === user.id) {
      elem.mainTag.remove();
      usersList.splice(count, 1);
      return;
    }
    // eslint-disable-next-line no-plusplus
    count++;
  }
  alert("Пользователя с таким айди не было найдено");
};

const readFromLocalStorage = () => {
  const currentArray = JSON.parse(localStorage.getItem("persone_state"));

  if (!currentArray) {
    return false;
  }

  usersList.forEach(user => {
    user.mainTag.remove();
  });
  usersList = [];

  currentArray.forEach(user => {
    createUser(user);
  });
};

const addToLocalStorageOrIndexeDB = () => {
  switch (dataBase) {
    case "ls":
      localStorage.setItem("persone_state", JSON.stringify(usersList));
      break;
    case "idb":
      addToIndexedDB();
      break;
  }
};

const checkRadio = value => {
  if (value === "ls") {
    dataBase = "ls";
    readFromLocalStorage();
  } else if (value === "idb") {
    dataBase = "idb";
    readFromIndexedDB();
  }
};

const checkOperation = (operation, user) => {
  clearFields();
  switch (operation) {
    case "create":
      createUser(user);
      break;
    case "update":
      updateUser(user);
      break;
    case "delete":
      deleteUser(user);
      break;
  }
  addToLocalStorageOrIndexeDB();
};

const btmAction = event => {
  const user = new User(
    inputsAreas[0].value,
    inputsAreas[1].value,
    inputsAreas[2].value,
    inputsAreas[3].value,
    inputsAreas[4].value,
    inputsAreas[5].value
  );

  if (!checkEmptyFields(user) && event.target.value !== "delete") {
    alert("Заполните все поля");
    return false;
  }

  checkOperation(event.target.value, user);
};

window.onload = () => {
  checkRadio(dataBase);
};

inputBtns.forEach(element => {
  element.addEventListener("click", btmAction);
});

radioBtns.forEach(element => {
  element.addEventListener("click", event => {
    checkRadio(event.target.value);
  });
});
