const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector(".form button");
const input = document.querySelector(".form input");
const img = document.querySelector(".qr-code img");

btn.addEventListener("click",() => {

    let inputValue = input.value;
    if(!inputValue) return;
    btn.innerHTML = "Generating QR Code...";
    img.src=` https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
    console.log(inputValue);

    img.addEventListener("load", () =>{
        btn.innerHTML = "Generate QR Code";
        wrapper.classList.add('active');
    })
})
input.addEventListener("keyup", () =>{
    console.log("kjsdfafjd");
    if(!input.value){
        wrapper.classList.remove("active");
    }
})



