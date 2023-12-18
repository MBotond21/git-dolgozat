let szamok = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("min").addEventListener("click", min);
    document.getElementById("max").addEventListener("click", max);
});

function clearInputs(){
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = null;
    }
}

function add(){
    if(document.getElementById("n").value != null){
        szamok.push(document.getElementById("n").value);
        clearInputs();
        document.getElementById("output").textContent += `${szamok[szamok.length-1]} `;
    }
    else{
        console.log("anya");
    }
}

function min(){
    let min = szamok[0];
    for (let i = 0; i < szamok.length; i++) {
        if(min > szamok[i]){
            min = szamok[i];
        }
    }
    document.getElementById("minOut").textContent = `Min: ${min}`;
}

function max(){
    let max = szamok[0];
    for (let i = 0; i < szamok.length; i++) {
        if(max < szamok[i]){
            max = szamok[i];
        }
    }
    document.getElementById("maxOut").textContent = `Max: ${max}`;
}