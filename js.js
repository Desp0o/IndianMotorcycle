document.getElementById("menu").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("burger").style.right ="0px";
    document.querySelector('body').style.overflow ="hidden";    
})

document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById("burger").style.right ="-300px";
    document.querySelector('body').style.overflow ="scroll";  
    document.querySelector('body').style.overflowX ="hidden"; 
})