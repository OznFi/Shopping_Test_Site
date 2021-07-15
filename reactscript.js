import * as Mod from "./like_button.js";

/*function thiso() {
    var ol = document.createElement("DIV");
    ol.setAttribute("class", "cardcontainer");
    document.querySelector("body").appendChild(ol);
    for (var i = 0; i < 10; i++) {
        var cards = document.createElement("DIV");
        cards.setAttribute("id", "cards");
        document.querySelector(".cardcontainer").appendChild(cards);
        Mod.cardrend("Lovely Title", "Acid_Cloud.png");
        cards.removeAttribute("id");
    }
}*/

function top() {
    Mod.suprend();
    //Mod.itemrend(false);
    //Mod.barrend();
    Mod.sortbarrend(qtags);
    Mod.priceradiorend();
}
var qtags = [];
function continiousrender() {
    var full = document.getElementById("itemsection");
    var fullspace = full.getBoundingClientRect();
    var winheight = window.innerHeight;
    /**/
    if (fullspace.bottom <= ((winheight + window.pageYOffset) - (fullspace.height/2))) {
      //  var newspace = document.createElement("DIV");
       // newspace.classList.add("items");
       // full.appendChild(newspace);
        Mod.itemrend(true);
    }
}
/*
function sortadjust() {
    var tagsec = document.getElementById("sorttags");
    if (this.checked == true) {
        alert("checked");
        tagsec.style.display = "flex";
        qtags.push(this.value);
        Mod.sortbarrend(qtags);
    }
    else {
        alert("unchecked");
        tagsec.style.display = "none";
        var ind = qtags.indexOf(this.value);
        qtags.splice(ind, 1);
    }
}
function addsortfunc() {
    //alert("yes");
    var ar = document.querySelectorAll("#brandcheckboxes input");
    alert(ar.length);
    for (var i = 0; i < ar.length; i++) {
        ar[i].addEventListener("change", sortadjust);
    }
}
/*function zoom(el) {
    el.children[0].style.transform="scale(1.5)"
}
function addzoom() {
    alert("lmao");
    var all = document.querySelectorAll("item");
    for (var i = 0; i < all.length; i++) {
        zoom(all[i]);
    }
}*/
function scrolsortlock() {
    var sor = document.getElementById("categorization");
    var sortheight = document.getElementById("categorization").getBoundingClientRect();
    var computeddisp = window.getComputedStyle(sor, null).getPropertyValue("position");
    if (window.pageYOffset >= 1) {
      //  if (computeddisp == "relative") {
          //  sor.style.position = "fixed";
        sor.style.top = 120 + window.pageYOffset + "px";
        //alert(120 + window.pageYOffset + "px");
        //}
        //alert("eyy");
    }
    //else {
        //alert("no");
      //  if (computeddisp == "fixed") {
        //    sor.style.position = "relative";
          //  sor.style.top = "auto";
        //}
    //}
}
window.addEventListener("load", top);
window.addEventListener("scroll", scrolsortlock);
window.addEventListener("scroll", continiousrender);