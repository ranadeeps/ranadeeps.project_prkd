function disp(val){
    document.getElementById("display").value+=val;
}
function clr(){
    document.getElementById("display").value="";
}
function ent(){
    window.open("https://wa.me/+91"+document.getElementById("display").value,"_blank");
}