function displaySeconds() {
    let today = new Date();
    let seconds = today.getSeconds();
    document.getElementById('seconds').textContent = seconds;
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    showTime(); 
    displaySeconds(); 
}
setInterval(showTime, 1000);
setInterval(displaySeconds, 1000);
function moveArrow(){
    let today=new Date();
    let seconds=today.getSeconds();
    let angle=seconds*6;
    document.getElementById('secondsArrow').style.transform=`rotate(${angle}deg)`;
}
