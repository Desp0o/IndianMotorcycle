

const reveals = document.querySelectorAll('.content');

    window.addEventListener('load', () => {
        
        for (let i = 0; i < reveals.length; i++) {
            reveals[i].classList.add('active');
            
                    
        }
    })

    
window.addEventListener('scroll', () => {
    
    for (let i = 0; i < reveals.length; i++) {
        
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 350;
        const revealEndPoint = 1000;
        
            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }  

            if(revealTop < windowHeight - revealEndPoint){
                reveals[i].classList.remove('active');
            }

            
            // ნახავს სქროლის პოზიციას
            localStorage.scrollX = window.scrollX;
            localStorage.scrollY = window.scrollY;
    }
}
);

window.addEventListener('load',function () {
    window.scrollTo(localStorage.scrollX || 0, localStorage.scrollY || 0);
})

