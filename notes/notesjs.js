let notesContainer=document.querySelector(".notes-container");
let createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");
showNotes();
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

function updateSorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
createbtn.addEventListener("click", ()=>{
    let inputbox=document.createElement("p")
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src="delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateSorage()
    }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateSorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if (event.key==="Enter"){
    document.execCommand("insertLineBReak");
    event.preventDefault();
    }
})