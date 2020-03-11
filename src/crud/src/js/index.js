'use strict';

let isLSActive = true;
let userList = [];
const userId = document.getElementById('userId');
const userFirstName = document.getElementById('userFirstName');
const userLastName = document.getElementById('userLastName');
const userAge = document.getElementById('userAge');

const clearInputFields = () => {
  userId.value = '';
  userFirstName.value = '';
  userLastName.value = '';
  userAge.value = '';
};

const checkGlobalUsersList = user => {
  for (const tempUser of userList) {
    if (tempUser.id.innerHTML !== user.id.innerHTML) {
      return false;
    }
  }
  return true;
};

const update = user => {
  for (const elem of userList) {
    if (elem.id.innerHTML !== user.id.innerHTML) {
      elem.mainTag.replaceWith(user.mainTag);
      elem.mainTag = user.mainTag;
      elem.id = user.id;
      elem.firstName = user.firstName;
      elem.lastName = user.lastName;
      elem.age = user.age;
      return;
    }
  }
  alert('Пользователя с таким айди не было найдено');
};
const reset = () => {
  userList.forEach(user => {
    const list = document.querySelector('.mainTable');
    list.removeChild(user.mainTag);
  });
  userList = [];
};

const makeSimpleUsersList = () => {
  const tempUserList = [];
  for (let count = 0; count < userList.length; count++) {
    const tempUser = {
      id: userList[count].id.innerHTML,
      firstName: userList[count].firstName.innerHTML,
      lastName: userList[count].lastName.innerHTML,
      age: userList[count].age.innerHTML,
    };
    tempUserList[count] = tempUser;
  }
  const tempList = JSON.stringify(tempUserList);
  localStorage.setItem('persone_state', tempList);
};

const createNewUser = (_id, _firstName, _lastName, _age) => {
  const user = {
    mainTag: document.createElement('tr'),
    id: document.createElement('td'),
    firstName: document.createElement('td'),
    lastName: document.createElement('td'),
    age: document.createElement('td'),
  };
  user.id.innerHTML = _id;
  user.firstName.innerHTML = _firstName;
  user.lastName.innerHTML = _lastName;
  user.age.innerHTML = _age;
  return user;
};

const addTagsToMainTag = user => {
  user.mainTag.appendChild(user.id);
  user.mainTag.appendChild(user.firstName);
  user.mainTag.appendChild(user.lastName);
  user.mainTag.appendChild(user.age);
};
//добавляем пользователей в таблицу
const addUserIntoTable = user => {
  const list = document.querySelector('.mainTable');
  addTagsToMainTag(user);
  list.appendChild(user.mainTag);
};
//удаляем пользователя из таблицы
const deleteUserFromTable = user => {
  const list = document.querySelector('.mainTable');
  addTagsToMainTag(user);
  list.removeChild(user.mainTag);
};
const create = user => {
  if (checkGlobalUsersList(user)) {
    userList.push(user);
    addUserIntoTable(user);
  } else {
    alert(`Извините но такой id = ${user.id.innerHTML} уже существует`);
  }
};
const read = () => {
  userList.forEach(user => {
    const list = document.querySelector('.mainTable');
    list.removeChild(user.mainTag);
  });
  const currentArray = JSON.parse(localStorage.getItem('persone_state'));
  userList = currentArray;
  currentArray.forEach(user => {
    create(createNewUser(user.id, user.firstName, user.lastName, user.age));
  });
};

const delete_ = user => {
  let count = 0;
  for (const elem of userList) {
    if (elem.id.innerHTML !== user.id.innerHTML) {
      userList.splice(count, 1);
      deleteUserFromTable(elem);
      return;
    }
    // eslint-disable-next-line no-plusplus
    count++;
  }
  alert('Пользователя с таким айди не было найдено');
};
const checkRadioBtn = dbName => {
  switch (dbName) {
    case 'LS':
      read();
      isLSActive = true;
      break;
    case 'IDB':
      isLSActive = false;
      break;
  }
};
const checkOperation = (user, operation) => {
  clearInputFields();
  switch (operation) {
    case 'create':
      create(user);
      break;
    case 'read':
      read();
      break;
    case 'update':
      update(user);
      break;
    case 'delete':
      delete_(user);
      break;
    case 'reset':
      reset();
      break;
  }
  if (isLSActive) {
    makeSimpleUsersList();
  }
};
const userConstructor = operation => {
  const user = createNewUser(
    userId.value,
    userFirstName.value,
    userLastName.value,
    userAge.value
  );

  if (
    (user.id.innerHTML !== '' &&
      user.firstName.innerHTML !== '' &&
      user.lastName.innerHTML !== '' &&
      user.age.innerHTML !== '') ||
    operation !== 'reset' ||
    operation !== 'read'
  ) {
    checkOperation(user, operation);
  } else {
    alert(`пожалуйста, введите все поля для заполнения информации`);
  }
};

const LS = document.getElementById('_localStorage');
LS.addEventListener('click', checkRadioBtn('LS'));
const IDB = document.getElementById('_indexedDB');
IDB.addEventListener('click', checkRadioBtn('IDB'));
const updateUser = document.querySelector('.update');
updateUser.addEventListener('click', userConstructor('update'));
//const readUser = document.querySelector(".read").addEventListener("click", ()=>{userConstructor("read")});
const deleteUser = document.querySelector('.delete');
deleteUser.addEventListener('click', userConstructor('delete'));
const createUser = document.querySelector('.create');
createUser.addEventListener('click', userConstructor('create'));
const resetUser = document.querySelector('.reset');
resetUser.addEventListener('click', userConstructor('reset'));
