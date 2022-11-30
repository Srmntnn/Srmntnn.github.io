const b = document.querySelector('button.btn2')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"

}   



function move() {
    document.getElementById("No").style.top-(Math.floor(Math.random()* (500 - 100) + 1));
    document.getElementById("No").style.top-(Math.floor(Math.random()* (-300 - 100) + 1));
}

const yesBtn = document.getElementById('yes');
const ques = document.getElementById('question');

yesBtn.addEventListener("click", ()=>{
    ques.innerHTML = 
    "Yes? planohan tana dason ah AHHAHAHAHHA HAHHAHAHAHH"
});