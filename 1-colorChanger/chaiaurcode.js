const buttons = document.querySelectorAll(".button");
const body = document.body;
console.log(buttons)
buttons.forEach((button)=>{
    console.log(button.id);
    button.addEventListener('click',(e)=>{
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
});
