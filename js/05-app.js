setTimeout(() => {
    console.log(document.visibilityState)
}, 3000);

document.addEventListener('visibilitychange',() =>{
    if(document.visibilityState === "visible"){
        console.log('mondongo');
    }
    else{
        console.log(`ñ`);
    }
})