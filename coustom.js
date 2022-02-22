const ul = document.querySelector(".main_ul");
const item = document.querySelectorAll("li");
let counter=0;

const changeCurrent=()=>{
    item.forEach((i)=>{
        i.classList.remove("show");
    });
    counter++;
    if(counter>item.length -1)counter=0;
    item[counter].classList.add("show");
};
setInterval(()=>ul.classList.add("w-100"),2000);
setInterval(()=>{
    changeCurrent();
    ul.classList.remove('w-100');
},4000);