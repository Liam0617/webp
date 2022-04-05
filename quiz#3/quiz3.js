document.addEventListener("keydown",logkey);
function logkey(e) {
var key=e.key
var p=document.getElementById("start");
p.innerHTML+= key;
}