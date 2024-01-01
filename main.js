
// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!

// IMPORT DATA
import {getDept,getDept10, getArt,getDepartments} from "./data.js";
import{artDisplay} from "./function.js";
import './style.css'


// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!


//DEPARTMENT BUTTON
let department = document.querySelector("#departments");//  "departments" menu button 
let menu = document.querySelector("#menu"); // unordered list for menu listings
let menuListings = document.getElementsByClassName("menu-listing"); // class of list items displaying each menu lisitng 
let menuList = document.querySelector("#contain-menu"); 
let gallery = document.querySelector("#gallery");
let departmentGrid = document.querySelector("#department")



//ABOUT BUTTON

let about = document.querySelector("#about"); // about button
let page = document.querySelector(".container"); // site container
let aboutDisplay = document.querySelector("#hideAbout"); // hidden about section
let closeAbout = document.querySelector("#closeAbout"); // nested button in hidden about section
let box = document.createElement('p'); // pragraph element for "about" display
let i = 0;
let typer;
// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!

// RESOLVING IMPORTED DATA

let resolvedDepartments = Promise.resolve(getDepartments()); // --> returns resolved Promise object
let resolvedArt = Promise.resolve(getArt()); // --> returns resolved Promise object



// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!


//DISPLAY SAMPLE
resolvedArt.then(displayGallery);
function displayGallery(art){
  art.map(artDisplay)
console.log(art)
}



//  DEPARTMENT BUTTON !!!!!!!  DEPARTMENT BUTTON !!!!!!!  DEPARTMENT BUTTON !!!!!!!  DEPARTMENT BUTTON !!!!!!!


//Creating menu list of departments
department.addEventListener("click", btnClick)

function btnClick(){
  resolvedDepartments.then(displayDept);
}


//BUTTON FUNCTIONALITY
async function dptClick(e){
  menu.classList.toggle("menu")
  menuList.classList.toggle("hide")
  console.dir(e.target.id)
 let showDept = await getDept(e.target.id);
  Promise.resolve(showDept).then(show)

}

// CALL LIST OF ITEMS, THEN DISPLAY THEM
async function show (d){
console.log(d)
let one = await getDept10(d)
Promise.resolve(one).then(displayDeptList )
}
// DISPLAYING LIST OF ITEMS
function displayDeptList (s){
  departmentGrid.innerHTML= ``;
  console.log(s)
  for (let i =0; i<s.length-1; i++){
    let title = document.createElement("p");
    let artist = document.createElement("p");
    let image = document.createElement("img");
    let boxes =  document.createElement("div");
    title.innerHTML=`${s[i].title}`
    artist.innerHTML= s[i].artistDisplayName ? `${s[i].artistDisplayName }` : "Unknown";
    image.src=`${s[i].primaryImage}`
     boxes.append(title);
     boxes.append(artist);
     boxes.append(image);
     departmentGrid.append(boxes)
  }
}
// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!

  //ASSIGNING FUNCTIONALITY TO BUTTON
  function displayDept (result){

    console.log(result)
    for(let i =0; i <= result.length -1; i++){
      menuListings[i].innerHTML = `${result[i].displayName} `
      menuListings[i].setAttribute("id", `${result[i].departmentId}`)
      menuListings[i].addEventListener("click",dptClick)
      menuListings[i].classList.add("menu-listed");
     // menuListings.classList.remove("hide") // show list of departments
    }
  
    menu.classList.toggle("menu") // unordered list
    menuList.classList.toggle("hide")
   
   
  
  }


// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!

//ABOUT BUTTON
about.addEventListener("click", configureAbout);

function configureAbout(){
  page.classList.add("hide"); // remove homepage
  aboutDisplay.classList.remove("hide"); // display about section
  aboutDisplay.classList.add("about"); // display about section
  closeAbout.classList.remove("hide");
  closeAbout.addEventListener("click",closeButton)
  typeWriter();
}

  // event listener function
  function typeWriter() {
  aboutDisplay.appendChild(box);
   typer =  setInterval(write,40)

}



function write (){

  let txt = 'Largest art museum in the Americas, 17 curatorial departments, founded in 1870 with its mission to bring art and art education to the American people, with a permanent collection containing over two million works, including works of art from classical antiquity and ancient Egypt; paintings and sculptures from nearly all the European masters; and an extensive collection of American and modern art '; 
  if(i <= txt.length -1){
    box.innerHTML += txt[i];
    i = i+1;
  }


}

  // event listener function
  function closeButton(){
    var i = 0;
     let closeAbout = document.querySelector("#closeAbout");
     let page = document.querySelector(".container");
     let aboutDisplay = document.querySelector("#hideAbout");
    closeAbout.classList.add("hide")
    page.classList.remove("hide");
    aboutDisplay.classList.add("hide");
    console.dir(document.body)
    // document.body.box.remove();
    console.log(page.classList)
   
    clearInterval(typer)
  }
// !!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!! =================== !!!!!!!!!!!!!!!!!!!














