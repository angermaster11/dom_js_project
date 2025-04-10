const form = document.querySelector("form");
const div = document.getElementById("results");
form.addEventListener("submit",(e)=>{
    div.innerText = ""
    e.preventDefault();

    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let bmi = weight/height;

    if(!bmi){
        div.innerText = "Sorry ";
    }
    div.appendChild(document.createTextNode(bmi));
})