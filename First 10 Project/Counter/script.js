let c = document.getElementById("count");
let d = document.getElementById("check");

let count = 0;

function incr() {
   if ( count < 20){
    count++
   }else{
    alert("Limit Reached")
   }
    c.textContent = count
    check()
}

function decr() {
    if ( count > 0 ){
        count--;
    }
    else{
        count= 0;
    }
   
    c.textContent = count;
    check()
}
function reset() {
    count = 0
    c.textContent = count;
    d.textContent = "Even";
    d.style.color = "Black";
}

function check(){
 if ( count%2==0){
    d.textContent = "Even";
    d.style.color = "Green";
 }else{
    d.textContent ="Odd";
    d.style.color = "Red";
 }
}
