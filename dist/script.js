const left = document.querySelector("#left");
const right = document.querySelector("#right");

const num = localStorage.getItem("index");

var anchor = 0;


left.addEventListener("click", () =>{
if(anchor == 1){
anchor = 3;
}else{
anchor--;
}

left.setAttribute("href", "#img"+anchor);

localStorage.setItem("index", anchor);
})

right.addEventListener("click", () =>{
if(anchor == 3){
anchor = 1;
}else{
anchor++;
}

right.setAttribute("href", "#img"+anchor);
localStorage.setItem("index", anchor);
})