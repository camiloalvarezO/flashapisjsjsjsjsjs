document.addEventListener('DOMContentLoaded',() =>{
    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            console.log(`se vé`);
            
        }
        
    })
    console.log(observer);
    observer.observe(document.querySelector(".premium"))
})