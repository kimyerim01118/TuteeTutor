const div1 = document.getElementById("Div1"),
div2 = document.getElementById("Div2");

let is = false;
let isClick = false;

div1.addEventListener("click",function(){
    is =!is;
    div1.style.backgroundColor = `${is ? "#333":"#fff"}`;
    alert("클릭을 하셨군요!");

});

div2.addEventListener("mouseover",function(){
    isClick = !isClick;
    div2.style.backgroundColor = `${isClick ? "#333":"#fff"}`;
});