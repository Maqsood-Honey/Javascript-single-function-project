
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus();
})

function removeClass(){
    pannels.forEach(pannel => {
        pannel.classList.remove('active');
    })

}