const btn = document.querySelector(".form button");
const input = document.querySelector(".form input");
const infoText = document.querySelector(".info-text");

let filterInput;

btn.addEventListener("click",() => {
let reverseInput = filterInput.split("").reverse().join("");
infoText.style.display = "block";
if(reverseInput != filterInput){
    infoText.innerHTML = `No, <span>'${input.value}'</span> is not a Palindrom`;
}
else{
    
    infoText.innerHTML = `Yes, <span>'${input.value}'</span> is a Palindrom`;
}
})

input.addEventListener("keyup", () =>{
    
    filterInput = input.value.toLowerCase().replace(/[^A-Z0-9]/ig,"");
    // console.log(filterInput)
    if(filterInput) {
        
        return btn.classList.add("active");
        
    }
    infoText.style.display = "none";
    btn.classList.remove("active");
})



