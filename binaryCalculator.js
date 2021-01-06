"use strict";

let btns = document.querySelectorAll("#btnSum, #btnSub, #btnMul, #btnDiv, #btn0, #btn1, #btnClr");

for(let i=0;i<btns.length;i++){
    btns[i].onclick = function(){
        if(this.innerHTML === "C"){
            document.getElementById("res").innerHTML = "";
        }else{
            document.getElementById("res").innerHTML += this.innerHTML;
        }
        }
    }
document.getElementById("btnEql").onclick = function(){
    let arr = document.getElementById("res").innerHTML.match(/([01]+)([\+\-\*\/])([01]+)/);
    let n = parseInt(arr[1],2)+arr[2]+parseInt(arr[3],2);
    document.getElementById("res").innerHTML = Math.floor(eval(n)).toString(2);
}
