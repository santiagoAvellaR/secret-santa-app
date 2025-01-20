let friendsList = [];
let selectedFriend = null;

function asignTextToElement(element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
    return;
}

function selectFriendRandomly() {
    let randomIndex = Math.floor(Math.random() * friendsList.length);
    selectedFriend = friendsList[randomIndex];
    asignTextToElement("#resultado", selectedFriend);
    return;
}

function addFriend() {
    let friendName = document.querySelector("#amigo").value;
    if (friendName == "") {
        alert("Debes ingresar un nombre! No puede estar vacío.");
        return;
    }
    friendsList.push(friendName);
    actualizeFriendsList();
    asignTextToElement("#amigo", "");
    document.querySelector("#amigo").setAttribute("placeholder", "Escribe un nombre");
}

function actualizeFriendsList() {
    let friendsString = "";
    for (let i = 0; i < friendsList.length -1; i++) {
        friendsString += friendsList[i] + ", ";
    }
    friendsString += friendsList[friendsList.length - 1];
    asignTextToElement("#listaAmigos", friendsString);
}