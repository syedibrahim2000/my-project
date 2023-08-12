const header= document.querySelector("header");
window.addEventListener("scroll",function(){
    Header.classlist.toggle("sticky",window.scrolly>80);
});
