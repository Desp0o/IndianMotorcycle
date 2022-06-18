document.lastScrollPosition = 0;
document.lastCcenterd = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {  
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if(document.onWayTo === null){
        const destIndex = direction === 'up' ? document.lastCcenterd -1 : document.lastCcenterd +1;
        if(destIndex >=0 && destIndex < sections.length){
            document.onWayTo = destIndex;
            window.scroll(0,sections[destIndex].offsetTop);
        }
    }
    

    sections.forEach((section, index) =>{
        if(window.pageYOffset === section.offsetTop){
            document.lastCcenterd = index;
            section.className = 'activeSec';
                if(document.onWayTo ===index){
                    document.onWayTo = null;
                }
        }else{
            section.className = '';
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})