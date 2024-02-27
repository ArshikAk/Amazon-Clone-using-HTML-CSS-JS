const images = document.querySelectorAll(".images img");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 0;

function change(){
    for(let i=0;i<images.length;i++)
    {
        images[i].style.display = 'none';
    }
    images[count].style.display = 'block';
}

previous.addEventListener("click",() =>{
    if(count > 0){
        count--;
    }
    else{
        count = images.length-1;
    }
    change();
})

next.addEventListener("click",() => {
    if(count < images.length - 1){
        count++;
    }
    else{
        count = 0;
    }
    change();
})