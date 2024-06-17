const left = document.querySelector("#left"),  right = document.querySelector("#right"),  imgs = document.querySelectorAll(".carousel img"),  trigger = document.querySelector("#trigger"),  nav = document.querySelector(".nav"),  links = document.querySelectorAll(".nav > a");

var offset = 0, nav_is_opened = false;

links.forEach((link) =>{
link.onclick = () => {
nav.style.width = "0%";
nav.style.height = "0vh";
nav.style.opacity = 0;
nav_is_opened = false;
}
});

trigger.addEventListener("click", () =>{
if(nav_is_opened){
nav.style.width = "0%";
nav.style.height = "0vh";
nav.style.opacity = 0;
nav_is_opened = false;
}else{
nav.style.opacity = 1;
nav.style.width = "60%";
nav.style.height = "35vh";
nav_is_opened = true;
}
})

left.addEventListener("click", () =>{
if(offset == 0){
offset = -((290*imgs.length)-290);
}else{
offset+= 290;
}

imgs.forEach((img) =>{
img.style.transform = "translateX("+offset+"px)";
})
})

right.addEventListener("click", () =>{
if(offset == -((290*imgs.length)-290)){
offset = 0;
}else{
offset-= 290;
}

imgs.forEach((img) =>{
img.style.transform = "translateX("+offset+"px)";
})
})