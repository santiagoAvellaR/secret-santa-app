let friendsList = [];
let selectedFriend = null;

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
    const menssage = "El amigo seleccionado fue: ";
    let randomIndex = Math.floor(Math.random() * friendsList.length);
    console.log(friendsList);
    console.log(randomIndex);
    console.log(friendsList[randomIndex]);
    selectedFriend = menssage + friendsList[randomIndex];
    asignTextToElement("#resultado", selectedFriend);
    friendsList.splice(randomIndex, 1);
    console.log(friendsList);
    actualizeFriendsList();
    return;
}

function addFriend() {
    let friendName = document.querySelector("#amigo").value;
    if (friendName == "") {
        alert("Debes ingresar un nombre! No puede estar vacío.");
        return;
    }
    if (friendsList.includes(friendName)) {
        alert("Ya tienes un amigo con ese nombre en lista!");
        clearInputBox();
        return;
    }
    friendsList.push(friendName);
    actualizeFriendsList();
    clearInputBox();
}

function clearInputBox() {
    document.querySelector('#amigo').value = '';
    document.querySelector('#amigo').setAttribute("placeholder", "Escribe un nombre");
}

function actualizeFriendsList() {
    let friendsString = "";
    if (friendsList.length == 0) {
        friendsString = "No hay amigos en la lista!";
        asignTextToElement("#listaAmigos", friendsString);
        return;
    }
    for (let i = 0; i < friendsList.length -1; i++) {
        friendsString += friendsList[i] + ", ";
    }
    friendsString += friendsList[friendsList.length - 1];
    asignTextToElement("#listaAmigos", friendsString);
}