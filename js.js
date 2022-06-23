
document.getElementById("menu").addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById("burger").style.right = "0px";
    document.getElementById('blur').style.display = "block";  
})

document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById("burger").style.right = "-300px";
    //document.querySelector('body').style.overflow = "scroll";  
    document.querySelector('body').style.overflowX = "hidden"; 
    document.getElementById('blur').style.display = "none";
})

document.getElementById('blur').addEventListener('click', () => {
    document.getElementById("burger").style.right = "-300px";
    document.getElementById('blur').style.display = "none";
})

function move(){
    document.getElementById('first').style.marginLeft = '50px';
}

document.querySelector('.burger_links').onclick = function(){
        document.getElementById("burger").style.right = "-300px";
        document.getElementById('blur').style.display = "none";
        setTimeout(linkClose1,100);
        setTimeout(linkClose2,100);
        setTimeout(linkClose3,100);
        setTimeout(linkClose4,100);
        setTimeout(linkClose5,100);
        setTimeout(linkClose6,100);
        setTimeout(linkClose7,100);
        setTimeout(linkClose8,100);
        setTimeout(linkClose9,100);
        setTimeout(linkClose10,100);
        setTimeout(linkClose11,100);
        setTimeout(linkClose12,100);
        setTimeout(linkClose13,100);
        setTimeout(linkClose14,100);
        setTimeout(linkClose15,100);
    };


