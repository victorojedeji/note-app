let main = document.querySelector(".main"),
filterLogo = document.querySelector(".filter-img"),
searchFilter =document.querySelector("#search"),
elipsisBtn = document.querySelectorAll(".elipsis"),
add = document.querySelector(".add"),
closeBtn = document.querySelector(".close-btn"),
editBtn = document.querySelectorAll(".edit toggle");

 filterLogo.addEventListener("click", show); 
 add.addEventListener("click", popUp);
 closeBtn.addEventListener("click", popUpClose);
 
 
 
 editBtn.forEach( item => {
     item.addEventListener("click", edit);
});
 elipsisBtn.forEach(item => {
    item.addEventListener("click",appear);
 }); 
    
    
let increment = 0;
function show() {
    increment = increment + 1;
    if(increment === 3) {
        increment = 1;
    }
    
    if(increment === 1){
        main.classList.add("show")
    } else {
        searchFilter.value = "";
        main.classList.remove("show")
    }
};

function popUp() {
    main.classList.add("popup");
};

function popUpClose() {
    main.classList.remove("popup");
}

function appear() {
   event.target.classList.add("appear");
   //console.log(event.target)
   let parent = event.target.parentNode;
   console.log(parent)
   
}

function edit() {
    main.classList.add("popup")
}