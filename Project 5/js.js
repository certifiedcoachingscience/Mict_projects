var storedItem= localStorage.getItem("storedItem");

function save(){
    var Item = document.getElementById("input").value;
    localStorage.setItem("storedItem", item);
    document.getElementById("savedText").innerHTML = item + "SAVED";
}

function get(){
    localStorage.getItem("storedItem");
    document.getElementById("openedText").innerHTML = storedItem + "OPENED";
}