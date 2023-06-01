let menuList = [{ id:1, item:"Food Item1",oneliner:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.", picture:"./1.png",hotel:"Hotel name1", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis inventore fugiat dignissimos officia hic?"  },{id:1, item:"Food Item2",oneliner:"Lorem, this is  ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.", picture:"./2.png",hotel:"Hotel name2", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis inventore fugiat dignissimos officia hic?" },
{id:1, item:"Food Item3",oneliner:"Lorem, can br donw ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.", picture:"./bg.jpg",hotel:"Hotel name3", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis inventore fugiat dignissimos officia hic?"},{id:1, item:"Food Item4",oneliner:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, exercitationem.", picture:"./bg1.jpg",hotel:"Hotel name4", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis diversity is can be achievedinventore fugiat dignissimos officia hic?"}
];


let item = document.querySelector("#item");
let oneline = document.querySelector("#oneLiner");
let pic = document.querySelector("#image");
let hotel = document.querySelector("#hotel");
let descript = document.querySelector("#desc");
let randbtn = document.querySelector("#random");
let nexttbtn = document.querySelector("#next");

// console.log(item)

let currentMenu=0;
window.addEventListener("DOMContentLoaded", function () {
     display(currentMenu)
});

function display(itemIndex){
console.log(itemIndex);  
  let menu= menuList[itemIndex];
 
  item.textContent=menu.item;
  oneline.textContent=menu.oneliner;
  pic.src=menu.picture;
  hotel.textContent=menu.hotel;
  descript.textContent=menu.desc;
 };

 randbtn.addEventListener("click",()=>{
  currentMenu = Math.floor(Math.random() * menuList.length)
  display(currentMenu);
  console.log(12)
});



pre.addEventListener("click", ()=>{
  currentMenu--;
 if(currentMenu < 0){
  currentMenu = menuList.length-1;

 }
display(currentMenu);
})
next.addEventListener("click", ()=>{
  currentMenu++;
 if(currentMenu > menuList.length-1){
  currentMenu = 0;

 }
display(currentMenu);
})
