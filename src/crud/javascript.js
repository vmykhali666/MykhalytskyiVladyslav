"use strict"
let userList = [];
let correntArray;

//консруктор пользователей
const userConstructor = (operation) => {
    let user = {
        mainTag     : document.createElement("tr"),
        id          : document.createElement("td"),
        firstName   : document.createElement("td"),
        lastName    : document.createElement("td"),
        age         : document.createElement("td"),
    };
    user.id.innerHTML = document.getElementById('userId').value;
    user.firstName.innerHTML = document.getElementById('userFirstName').value;
    user.lastName.innerHTML = document.getElementById('userLastName').value;
    user.age.innerHTML = document.getElementById('userAge').value;
    if ((user.id.innerHTML != "" && user.firstName.innerHTML != "" &&
        user.lastName.innerHTML != "" && user.age.innerHTML != "") ||
        (operation == "reset" || operation == "read")){
        checkOperation(user, operation);
    }
    else{
        alert(`пожалуйста, введите все поля для заполнения информации`);
    }
}
const clearInputFields = () => {
    document.getElementById('userId').value = "";
    document.getElementById('userFirstName').value = "";
    document.getElementById('userLastName').value = "";
    document.getElementById('userAge').value = "";
}
//проверяем операцию и выполняем действия
const checkOperation = (user, operation) => {
    clearInputFields();
    switch(operation){
        case "create":
            create(user);
            break;
        case "read":
            read();
            break;
        case "update":
            update(user);
            break;
        case "delete":
            delete_(user);
            break;
        case "reset":
            reset();
            break;
    }
    if(operation != "reset"){
        makeSimpleUsersList();
    }
}

// проверяет есть ли в глобальном массиве обьект с таким же главным ключем
const checkGlobalUsersList = (user) =>{
    for(let tempUser of userList){
        if (tempUser.id.innerHTML == user.id.innerHTML){
            return false;
        }
    }
    return true;
}
//добавление элемента в массив
const create = (user) =>{
    
    if (checkGlobalUsersList(user)){
        userList.push(user);
        addUserIntoTable(user); 
    }
    else{
        alert(`Извините но такой id = ${user.id.innerHTML} уже существует`);
    }
}
//удаляем пользователя
const delete_ = (user) =>{
    let count = 0;
    for(let elem of userList){
        if (elem.id.innerHTML == user.id.innerHTML){
            userList.splice(count,1);
            deleteUserFromTable(elem);
            return;
        }
        count++;
    } 
    alert("Пользователя с таким айди не было найдено");
}
//обновляет список пользователей
const update = (user) =>{
    for(let elem of userList){
        if (elem.id.innerHTML == user.id.innerHTML){
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
}
const reset = () => {
    alert();
    userList.forEach(user => {
        let list = document.querySelector(".mainTable");    
        list.removeChild(user.mainTag);
    });
    userList = [];
}







// делаем простой обьект
const makeSimpleUsersList = () => {
    let tempUserList = [];
    for(let count = 0; count < userList.length; count++){
        let tempUser = {
            id          : userList[count].id.innerHTML,
            firstName   : userList[count].firstName.innerHTML,
            lastName    : userList[count].lastName.innerHTML,
            age         : userList[count].age.innerHTML,
        }
        tempUserList[count] = tempUser;
    }
    let tempList = JSON.stringify(tempUserList);
    localStorage.setItem('persone_state', tempList);
}
// рид, удаляет все с таблицы, потом парсит все с ЛокалСторэдж, преобразует в User и добавляет с помощью функции create
const read = () =>{
    userList.forEach(user => {
        let list = document.querySelector(".mainTable");    
        list.removeChild(user.mainTag);
    });
    let currentArray = JSON.parse(localStorage.getItem("persone_state"));
    currentArray.forEach(user => {
        create(createNewUserForRead(user.id, user.firstName, user.lastName, user.age));
    });
}
const createNewUserForRead = (_id, _firstName, _lastName, _age) =>{
    let user = {
        mainTag     : document.createElement("tr"),
        id          : document.createElement("td"),
        firstName   : document.createElement("td"),
        lastName    : document.createElement("td"),
        age         : document.createElement("td"),
    };
    user.id.innerHTML = _id;
    user.firstName.innerHTML = _firstName;
    user.lastName.innerHTML = _lastName;
    user.age.innerHTML = _age;
    return user;
}
//







const addTagsToMainTag = (user) => {
    user.mainTag.appendChild(user.id);
    user.mainTag.appendChild(user.firstName);
    user.mainTag.appendChild(user.lastName);
    user.mainTag.appendChild(user.age);
}
//добавляем пользователей в таблицу
const addUserIntoTable = (user) => {
    let list = document.querySelector(".mainTable");
    addTagsToMainTag(user);
    list.appendChild(user.mainTag);
}
//удаляем пользователя из таблицы
const deleteUserFromTable = (user) =>{
    let list = document.querySelector(".mainTable");
    addTagsToMainTag(user);    
    list.removeChild(user.mainTag);
}


//подключаем обработчики событий для каждой кнопки и передаем в них сроку которая говорит, что это за операция
const updateUser = document.querySelector(".update").addEventListener("click", ()=>{userConstructor("update")});
const readUser = document.querySelector(".read").addEventListener("click", ()=>{userConstructor("read")});
const deleteUser = document.querySelector(".delete").addEventListener("click", ()=>{userConstructor("delete")});
const createUser = document.querySelector(".create").addEventListener("click", ()=>{userConstructor("create")});
const resetUser = document.querySelector(".reset").addEventListener("click", ()=>{userConstructor("reset")});