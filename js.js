document.getElementById("menu").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("burger").style.right = "0px";
    document.querySelector('body').style.overflow = "hidden";  
    document.getElementById('blur').style.display = "block";  
})

document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById("burger").style.right = "-300px";
    document.querySelector('body').style.overflow = "scroll";  
    document.querySelector('body').style.overflowX = "hidden"; 
    document.getElementById('blur').style.display = "none";
})

document.getElementById('blur').addEventListener('click', () => {
    document.getElementById("burger").style.right = "-300px";
    document.getElementById('blur').style.display = "none";
})