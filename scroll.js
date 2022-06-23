//დეკლარირება კონტეტნის
const reveals = document.querySelectorAll('.content');

// რეფრეშზე არსებულ ტაგს მიენიჭოს აქტივი სტატუსი
window.addEventListener('load', () => {
        
        for (let i = 0; i < reveals.length; i++) {
            reveals[i].classList.add('active');         
        }
})

// რეფრეშის და სქროლის კომნინაცია
window.addEventListener('load',function () {

    window.addEventListener('scroll', () => {
    
        for (let i = 0; i < reveals.length; i++) {
            
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            const revealpoint = 350;
            const hideBottom = reveals[i].getBoundingClientRect().bottom;
            const hidePoint = 300;
            
                //სქროლისას გამოჩენა
                if(revealTop < windowHeight - revealpoint){
                    reveals[i].classList.add('active');
                    
                }else{
                    reveals[i].classList.remove('active');
                    window.addEventListener('load', () => {
        
                        for (let i = 0; i < reveals.length; i++) {
                            reveals[i].classList.add('active');         
                        }
                    })
                }  
                
                //სქროლისას გაქრობა
                if(hideBottom < windowHeight - hidePoint){
                    reveals[i].classList.remove('active');
                    window.addEventListener('load', () => {
        
                        for (let i = 0; i < reveals.length; i++) {
                            reveals[i].classList.add('active');
                        }
                    })
                }
    
                // ნახავს სქროლის პოზიციას
                localStorage.scrollX = window.scrollX;
                localStorage.scrollY = window.scrollY;
        }
    }
    );
})

