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

            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }  
    }
}
);

