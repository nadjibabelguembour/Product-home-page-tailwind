const btn=document.getElementById('menu-btn');
const nav = document.getElementById('menu');
btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})



document.onclick=function(e){
    if(e.target.id!== 'menu-btn' && e.target.id!== 'menu'){
        console.log("you clicked outside the menu")
        btn.classList.remove('open')
        // nav.classList.toggle('flex');
        nav.classList.add('hidden');
        nav.classList.remove('flex');
        
    }
     
}
