let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];

togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
});


let toclose = document.querySelector('.toggle_click');
toclose.addEventListener("click",function(){
    navlink.classList.toggle('active');
});

 
const scrollTools = document.querySelector("#toolsimg");
scrollTools.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollTools.scrollLeft += evt.deltaY;
});

const scrollServices = document.querySelector("#service_des");

scrollServices.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollServices.scrollLeft += evt.deltaY;
});

function openResume(){
    window.open("https://drive.google.com/file/d/1AJujwVACr47OCJBrcXKx7RNLYSLPUBBI/view?usp=sharing", "_blank")
}