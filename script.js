let buttonIncrease = document.getElementById("increase");
let buttonDecrease = document.getElementById("decrease");
let buttonReset = document.getElementById("reset");
let counterShow = document.getElementById("counter");

let count = 0;

buttonIncrease.addEventListener("click" ,()=>{
count +=1;
counterShow.innerHTML = count;
changeColor(count);
})

buttonDecrease.addEventListener("click", ()=>{
    count -=1;
    counterShow.innerHTML = count;
    changeColor(count);
})

buttonReset.addEventListener("click", ()=>{
    if(confirm("Rəqəm sıfırlanacaq!")==true){
        count =0;
        counterShow.innerHTML = count;
        changeColor(count);
    }
    else{
        return false;
    }
})
function changeColor(count){
    const hue = count * 10;
    counterShow.style.color =`hsl(${hue}, 100%, 50%)`; 
}