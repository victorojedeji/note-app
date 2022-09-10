let main = document.querySelector(".main"),
filterLogo = document.querySelector(".filter-img"),
searchFilter =document.querySelector("#search"),
elipsisBtn = document.querySelectorAll(".elipsis"),
add = document.querySelector(".add"),
closeBtn = document.querySelector(".close-btn"),
editBtn = document.querySelectorAll(".edit toggle"),
delBtn = document.querySelectorAll(".del toggle"),
descriptionBox = document.querySelectorAll(".description"),
addNote = document.querySelector(".add-btn"),
titleTag = document.querySelector("#input-post"),
descTag = document.querySelector("#text-area"),
list = document.querySelector(".list");


 filterLogo.addEventListener("click", show); 
 add.addEventListener("click", popUp);
 closeBtn.addEventListener("click", popUpClose);
 addNote.addEventListener("click", addNoteFunc)
 
 
 //editBtn.forEach( item => {
 //    item.addEventListener("click", edit)
//});

 //elipsisBtn.forEach(item => {
 //   item.addEventListener("click", appear);
 //}); 
    
// descriptionBox.forEach(item => {
//     item.addEventListener("click", expand)
// })   

  
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
    titleTag.value = "";
    descTag.value = "";
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

function displayNote() {
    document.querySelectorAll(".note-wrapper").forEach(note => note.remove());
    
    notes.forEach((note) => {
        let liTag =    `<li class="note-wrapper">
                            <div class="title-date-ellipsis">
                                <p class="title" title="${note.title}">${note.title}</p>
                                <p class="date">${note.date}</p>
                                <img class="elipsis" src="svg/elipsis.svg" onclick="appear()"></img>
                                <div class="del-edit">
                                    <div class="del toggle" onclick="del()">
                                        <img class="del-img" src="svg/delete.svg" alt="delete" />
                                        <p>delete</p>
                                    </div>
                                    <div class="edit toggle" onclick="edit()">
                                        <img class="edit-img" src="svg/edit.svg" alt="edit" />
                                        <p>edit</p>
                                    </div>
                                  </div>
                            </div>
                            <p class="description" onclick="expand()">${note.description}</p> 
                       </li>`
       list.innerHTML += liTag;
       //list.insertAdjascentHTML("afterbegin", liTag);
    })
}
displayNote();

function edit() {
    main.classList.add("popup");
    document.querySelector(".input-title").textContent = "Edit Title";
    document.querySelector(".note-title").textContent = "Edit Note";
    document.querySelector(".popup-header").textContent = "Update Note";
    addNote.textContent = "Update Note";

    let title = document.querySelector(".title");
    let titleTxt = title.getAttribute("title");
    console.log(titleTxt)
    notes.forEach(note => {
        if(note.title === titleTxt) {
            console.log(note)
        }
    })


    let wrapper = event.target.parentNode,
    parentWrap = wrapper.parentNode,
    parentSupWrap = parentWrap.parentNode;
    parentSupWrap.classList.remove("appear");
}


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
        displayNote();
        popUpClose();
        
    }
}
