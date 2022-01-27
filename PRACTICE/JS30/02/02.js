;(function(){
    const second = document.querySelector('.second-hand');
    const min = document.querySelector('.min-hand');
    const hand = document.querySelector('.hour-hand');

    function setClock(){
        const data = new Date();
        const sdg = data.getSeconds()*6;
        const mdg = data.getMinutes()*6 + data.getSeconds() * 6 / 60;
        const hdg = data.getHours()*30 + data.getMinutes()*6 / 12;
        second.style.transform = `rotate(${sdg}deg)`;
        min.style.transform = `rotate(${mdg}deg)`;
        hand.style.transform = `rotate(${hdg}deg)`;
    }
    /*function clockHandle(){
        setClock();
        window.requestAnimationFrame(clockHandle);
    }
    //setClock();
    window.requestAnimationFrame(clockHandle);*/
    setInterval(setClock,1000);
})()