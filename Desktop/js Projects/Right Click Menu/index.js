const inputrange = document.querySelectorAll(".range-input input");
let progress = document.querySelector(".slider .progress");
// let priceinput = document.querySelector(".price-input input");
let priceinput = document.querySelectorAll(".price-input input");

let gap = 1000;
inputrange.forEach(element => {
    element.addEventListener("input", e =>{
        let minVal = parseInt(inputrange[0].value);
        let maxVal = parseInt(inputrange[1].value);
        
        if(maxVal - minVal < gap){
            if(e.target.className === "range-min"){
                inputrange[0].value = maxVal -gap;
            }
            else{
                inputrange[1].value = minVal + gap;
            }
        }
        else{
            // console.log(priceinput[0],priceinput[1])
            priceinput[0].value= minVal;
            priceinput[1].value= maxVal;

            progress.style.left= (minVal /  inputrange[0].max)*100 + "%";
            progress.style.right= 100-(maxVal /  inputrange[1].max)*100 + "%";

        }
    })
    
});