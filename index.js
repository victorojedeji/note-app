let main = document.querySelector(".main"),
filterLogo = document.querySelector(".filter-img"),
searchFilter =document.querySelector("#search"),
elipsisBtn = document.querySelectorAll(".elipsis");



 filterLogo.addEventListener("click", show)
 elipsisBtn.forEach(item => {
    item.addEventListener("click", appear);
 })
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


function appear() {
    // main.classList.add("appear")
    console.log(this.e.target)
}
