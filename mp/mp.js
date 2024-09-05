let prog=document.getElementById("prog")
let song=document.getElementById("song")
let ctrlicon=document.getElementById("ctrlicon")

song.onloadedmetadata=function(){
    prog.max=song.duration;
    prog.value=song.currentTime;
}
function playpause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play(); 
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        prog.value=song.currentTime;
    },500);
}
prog.onchange=function(){
    song.play();
    song.currentTime=prog.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
    
}