let body = document.querySelector('.body'),
    rightClick = document.querySelector('.right-click');


body.addEventListener('mousedown', (e) => {
    e.preventDefault();
    console.log(e.pageX);
    console.log(e.pageY);

    let displayWidth = body.offsetWidth;
    let displayHeight = body.offsetHeight;

    let dialogWidth = rightClick.offsetWidth;
    let dialogHeight = rightClick.offsetHeight;

    if(e.pageY > (displayHeight -dialogHeight)) {
        let razlika = e.pageY -(displayHeight -dialogHeight);
       
        if(e.button == 2) {
            rightClick.style.display = "block";
            rightClick.style.top = (e.pageY - (razlika + 30))+ "px";
            rightClick.style.left = (e.pageX - 25) + "px";
        }else {
            rightClick.style.display = "none"
        }
    }else {
        if(e.pageX > (displayWidth -dialogWidth)) {
            if(e.button == 2) {
                rightClick.style.display = "block";
                rightClick.style.top = (e.pageY - 25)+ "px";
                rightClick.style.left = (e.pageX - 380) + "px";
            }else {
                rightClick.style.display = "none"
            }
        }else {
            if(e.button == 2) {
                rightClick.style.display = "block";
                rightClick.style.top = (e.pageY - 25)+ "px";
                rightClick.style.left = (e.pageX - 20) + "px";
            }else {
                rightClick.style.display = "none"
            }
        }
    }

    
    
    
})

body.addEventListener('contextmenu', (e)=>{
    e.preventDefault(); // this will prevent browser default behavior 
  });