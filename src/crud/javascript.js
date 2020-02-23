"use strict"
let userList = [];





//консруктор пользователей
const userConstructor = (operation) => {
    let tagTr = document.createElement("tr");
    let tagTd1 = document.createElement("td");
    let tagTd2 = document.createElement("td");
    let tagTd3 = document.createElement("td");
    let tagTd4 = document.createElement("td");
    tagTd1.innerHTML = document.getElementById('userId').value;
    tagTd2.innerHTML = document.getElementById('userFirstName').value;
    tagTd3.innerHTML = document.getElementById('userLastName').value;
    tagTd4.innerHTML = document.getElementById('userAge').value;
    let user = {
        mainTag     : tagTr,
        id          : tagTd1,
        firstName   : tagTd2,
        lastName    : tagTd3,
        age         : tagTd4,
    };
    if (user.id.innerHTML == "" || user.firstName.innerHTML == "" ||
        user.lastName.innerHTML == "" || user.age.innerHTML == ""){
        alert(`please insert all fields of user information`);
    }
    else{
        checkOperation(user, operation);
    }
}
//проверяем операцию и выполняем действия
const checkOperation = (user, operation) => {
    document.getElementById('userId').value = "";
    document.getElementById('userFirstName').value = "";
    document.getElementById('userLastName').value = "";
    document.getElementById('userAge').value = "";
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
        alert(`Sorry, but this id = ${user.id.innerHTML} is busy`);
    }
}
//удаляем пользователя
const delete_ = (user) =>{
    let count = 0;
    for(let elem of userList){
        if (elem.id.innerHTML == user.id.innerHTML){
            userList.splice(count,1);
            deleteUserFromTable(elem.mainTag);
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
// магическая и покрытая тайной и мраком функция read
const read = () =>{

}

//добавляем пользователей в таблицу
const addUserIntoTable = (user) => {
    user.mainTag.appendChild(user.id);
    user.mainTag.appendChild(user.firstName);
    user.mainTag.appendChild(user.lastName);
    user.mainTag.appendChild(user.age);
    let list = document.querySelector(".mainTable");
    list.appendChild(user.mainTag);
}
//удаляем пользователя из таблицы
const deleteUserFromTable = (user) =>{
    let list = document.querySelector(".mainTable");
    user.mainTag.appendChild(user.id);
    user.mainTag.appendChild(user.firstName);
    user.mainTag.appendChild(user.lastName);
    user.mainTag.appendChild(user.age);
    list.removeChild(user);
}


//подключаем обработчики событий для каждой кнопки и передаем в них сроку которая говорит, что это за операция
const updateUser = document.querySelector(".update").addEventListener("click", ()=>{userConstructor("update")});
const readUser = document.querySelector(".read").addEventListener("click", ()=>{userConstructor("read")});
const deleteUser = document.querySelector(".delete").addEventListener("click", ()=>{userConstructor("delete")});
const createUser = document.querySelector(".create").addEventListener("click", ()=>{userConstructor("create")});