function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;


    let time = hour + ':' + minutes + ':' + seconds;

    document.querySelector('#myTime').innerText = time;

    setTimeout(showTime, 1000);


}

showTime();