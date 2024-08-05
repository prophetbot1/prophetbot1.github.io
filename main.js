let rightBox = document.querySelector(".right");
let arrow = document.querySelector(".arrow");
let main = document.querySelector(".main");
let leftBox = document.querySelector(".left");
window.onload = function(){ 
    var audio = document.getElementById('music');
    audio.pause();
}
    function spread(){
        if (rightBox.classList.contains('open')) {  
            rightBox.classList.remove('open');  
            rightBox.classList.add('close');  
            if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                arrow.style.transform = 'rotate(90deg)'; 
            }
            else{
                arrow.style.transform = 'rotate(0deg)'; 
            }
            main.style.display='none'
            
        } else {  
            rightBox.classList.remove('close');  
            rightBox.classList.add('open');  
            if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                arrow.style.transform = 'rotate(-90deg)'; 
            }
            else{
                arrow.style.transform = 'rotate(180deg)'; 
            }
            setTimeout(() => { main.style.display='block'; }, 150);
        }  

    }
    function waao(){
        let audio = document.getElementById('music');
        let diangun = document.querySelector(".waao")
        let logo = document.querySelector(".logo")
        if(logo.classList.contains('done')){
            audio.pause();
        }
        else{
            document.documentElement.requestFullscreen();
            audio.play();
            diangun.style.display= 'block';
            setTimeout(() => { diangun.style.display= 'none';}, 1500);
            logo.classList.add('done'); 
            document.exitFullscreen();
        }
        
    }
