
const pannels = document.querySelectorAll('.pannel');
pannels.forEach(pannel => {
    pannel.addEventListener('click',()=>{
        //removeClass();    
        pannel.classList.toggle('active');

   if(pannel.classList.value == 'pannel active'){
    
   }     
   else {
    
   }
    })
});

function removeClass(){
    pannels.forEach(pannel => {
        pannel.classList.remove('active');
    })

}