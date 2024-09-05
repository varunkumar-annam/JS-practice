const pwdbox=document.getElementById("pwdbox")
const len=12;
const up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lc="abcdefghijklmnopqrstuvwxyz"
const n="0123456789"
const sy="!@#$%^&*?/~{}[]()-_+><|"
const all=up+lc+n+sy;
function createpwd(){
    let pwd="";
    pwd+=up[Math.floor(Math.random()*up.length)];
    pwd+=lc[Math.floor(Math.random()*lc.length)];
    pwd+=n[Math.floor(Math.random()*n.length)];
    pwd+=sy[Math.floor(Math.random()*sy.length)];
   while (len>pwd.length){
    pwd+=all[Math.floor(Math.random()*all.length)];
   }
   pwdbox.value=pwd;
}
function copypwd(){
    if(pwdbox.value==""){
        alert("click generate password!");
    }
    pwdbox.select();
    document.execCommand("copy");
}