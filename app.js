let friendsList = [];
let selectedFriendList = [];
let selectedFriend = null;
const prefixFriendList = "Amigos disponibles: ";
const prefixSelectedFriendList = "Amigos ya seleccionados: ";
const prefixSelectedFriend = "El amigo seleccionado fue: ";

function asignTextToElement(element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
    return;
}

function selectFriendRandomly() {
    if (friendsList.length == 0) {
        asignTextToElement('#resultado', "");
        alert("No hay amigos en la lista! Agrega amigos para poder seleccionar uno.");
        return;
    }
    let randomIndex = Math.floor(Math.random() * friendsList.length);
    console.log(friendsList);
    console.log(randomIndex);
    console.log(friendsList[randomIndex]);
    selectedFriend = prefixSelectedFriend + friendsList[randomIndex];
    asignTextToElement("#resultado", selectedFriend);
    selectedFriendList.push(friendsList[randomIndex]);
    friendsList.splice(randomIndex, 1);
    console.log(friendsList);
    actualizeList('#listaAmigosSeleccionados', selectedFriendList);
    actualizeList('#listaAmigos', friendsList);
    return;
}

function addFriend() {
    let friendName = document.querySelector("#amigo").value;
    if (friendName == "") {
        alert("Debes ingresar un nombre! No puede estar vacío.");
        return;
    }
    if (friendsList.includes(friendName) || selectedFriendList.includes(friendName)) {
        alert("Ya tienes un amigo con ese nombre en lista!");
        clearInputBox();
        return;
    }
    friendsList.push(friendName);
    actualizeList('#listaAmigos', friendsList);
    clearInputBox();
}

function clearInputBox() {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').setAttribute("placeholder", "Escribe un nombre");
}

function actualizeList(identifier, list) {
    let friendsString = (identifier == '#listaAmigos') ? prefixFriendList : prefixSelectedFriendList;
    if (list.length == 0) {
        friendsString = friendsString + "No hay amigos en la lista!";
        asignTextToElement(identifier, friendsString);
        return;
    }
    for (let i = 0; i < list.length -1; i++) {
        friendsString += list[i] + ", ";
    }
    friendsString += list[list.length - 1];
    asignTextToElement(identifier, friendsString);
}

