const boxes = document.querySelectorAll('.box');
window.addEventListener('click', () => {
    
    
    boxes.forEach(box =>{
        console.log(123)
        box.classList.toggle('active');
    })
})
  
window.addEventListener('scroll', secrollMe)
  secrollMe()
 
 function secrollMe(){
    const windowHeight= window.innerHeight / 5 * 3;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < windowHeight){
            box.classList.add('active');
        }
        else{
            box.classList.remove('active');
        }
    })
 }

 