;(function(){
    function playHandle(e){
        //播放
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        console.log(audio);
        if(audio){
            audio.currentTime = 0 ;
            audio.play();
        }
        //樣式 
        const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if(dom){
            dom.classList.add('playing');
        }
    }
    function handle(e){
        if(e.propertyName === 'transform'){
            e.currentTarget.classList.remove('playing');
        }
    }
    window.addEventListener('keydown',playHandle);
    document.querySelectorAll('.key').forEach(function(key){
        key.addEventListener('transitionend',handle);
    });
})()