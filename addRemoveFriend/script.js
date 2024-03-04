let a = document.getElementById("add");
let stat = document.querySelector("#istatus");
let flag = 0;

a.addEventListener("click",function(){
    if(flag==0){
        a.innerText = "Remove Friend"
        stat.innerText=" Friends ";
        stat.style.color="green";
        flag = 1;
    }
    else{
            stat.innerText=" Strangers ";
            stat.style.color="red";
            a.innerText="Add Friend";
            flag = 0;
    }
   
})




