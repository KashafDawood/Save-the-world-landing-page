"use strict";

//humburger btn
const humbtn = document.getElementById("humbtn");
const mobileMenu = document.getElementById("mobileMenu");
const icon = document.getElementById("icon");

mobileMenu.style.right = "-770px";

humbtn.onclick = function(){

    if(mobileMenu.style.right === "-770px"){
        mobileMenu.style.right = "0";
        icon.classList.remove("bx-menu-alt-right");
        icon.classList.add("bx-x");
    }
    else{
        mobileMenu.style.right = "-770px";
        icon.classList.add("bx-menu-alt-right");
        icon.classList.remove("bx-x");
    }
}