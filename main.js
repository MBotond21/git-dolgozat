let szamok = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", add);
});

function clearInputs(){
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = null;
    }
}

function add(){
    if(document.getElementById("n").value != null){
        szamok.push(document.getElementById("n").value);
    }
    clearInputs();
}