const notificarmeBtn = document.querySelector('#notificar');

notificarmeBtn.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('mostar noti ',resultado);
        }).catch((err) => {
            console.log('mostar noti ',resultado);
        });
        
})

const mostrarNoti = document.querySelector('#verNotificacion');
mostrarNoti.addEventListener('click', ()=> {
    if(Notification.permission === 'granted'){
        const noti = new Notification('Mondongo',{
            icon: `https://images3.memedroid.com/images/UPLOADED101/5f71f5cf73c53.jpeg`
        });
        
        noti.onclick= function(){
            window.open('https://www.youtube.com/shorts/16uJ-jxcKHo');
        } 
        
    }
})