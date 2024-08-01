let rightBox = document.querySelector(".right")
let arrow = document.querySelector(".arrow")
let main = document.querySelector(".main")
let leftBox = document.querySelector(".left")

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
            setTimeout(() => { main.style.display='block'; }, 100);
        }  

    }
