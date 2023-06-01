
const text_load = document.querySelector('.text-load');
const body = document.querySelector('.con');
const bg = document.querySelector('.bg');

text_load.addEventListener('click',()=>{
    let load=0;
    let dec=100;

    let int= setInterval(function(){
        load++;
        dec--;
        if(load > 99){
            clearInterval(int);            
        }

        text_load.innerHTML=`${load}%`;
        text_load.style.opacity= (dec*0.01);
        bg.style.filter = `blur(${dec}px)`;
        
    }, 30);
    

})
function Blur_up(load,dec){
    
}