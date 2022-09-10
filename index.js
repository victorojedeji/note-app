let main = document.querySelector(".main"),
filterLogo = document.querySelector(".filter-img"),
searchFilter =document.querySelector("#search"),
elipsisBtn = document.querySelectorAll(".elipsis"),
add = document.querySelector(".add"),
closeBtn = document.querySelector(".close-btn"),
editBtn = document.querySelectorAll(".edit toggle"),
descriptionBox = document.querySelectorAll(".description"),
addNote = document.querySelector(".add-btn"),
titleTag = document.querySelector("#input-post"),
descTag = document.querySelector("#text-area");


 filterLogo.addEventListener("click", show); 
 add.addEventListener("click", popUp);
 closeBtn.addEventListener("click", popUpClose);
 addNote.addEventListener("click", addNoteFunc)
 
 
 editBtn.forEach( item => {
     item.addEventListener("click", edit)
});

 elipsisBtn.forEach(item => {
    item.addEventListener("click", appear);
 }); 
    
descriptionBox.forEach(item => {
    item.addEventListener("click", expand)
})   
  
const notes = JSON.parse(localStorage.getItem("notes") || "[]");     


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
   let parent = event.target.parentNode;
   increment = increment + 1;
   if(increment === 3) {
        increment = 1;
   }
   
   if(increment === 1) {
        parent.classList.add("appear")
   } else {
       parent.classList.remove("appear")
   }
}

function expand() {
    let parentEl = event.target.parentNode;
    
    increment = increment + 1;
    if(increment=== 3) {
        increment = 1;
    }
    
    if(increment === 1) {
        parentEl.classList.add("expand")
    } else {
        parentEl.classList.remove("expand")
    }
};

function addNoteFunc(e) {
    e.preventDefault();
    let months = ["January", "February", " March", "April", " May", "June", " July", "August", " September", "October", "November", " December"];
    
    let titleNote = titleTag.value;
    let descNote = descTag.value;
    if(titleNote || descNote) {
        let dateObj = new Date();
        let date = dateObj.getDate();
        let month = months[dateObj.getMonth()];
        let year = dateObj.getFullYear();
        let noteObj = {
            title: titleNote,
            description: descNote,
            date: `${month} ${date}, ${year}`
        }
        notes.push(noteObj);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}


function edit() {
    main.classList.add("popup");
}
