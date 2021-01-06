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
