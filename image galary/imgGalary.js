let scrollcon=document.querySelector(".galary");
let backbtn=document.getElementById("bkbtn");
let nxtbtn=document.getElementById("ntbtn");
// console.log(scrollcon);
scrollcon.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollcon.scrollLeft+=evt.deltaY;
    scrollcon.style.scrollBehavior="auto";
});
nxtbtn.addEventListener("click",()=>{
    // console.log('button clicked');
    scrollcon.style.scrollBehavior="smooth";
    scrollcon.scrollLeft+=900;
});
backbtn.addEventListener("click",()=>{
    scrollcon.style.scrollBehavior="smooth";
    scrollcon.scrollLeft-=900;
});
