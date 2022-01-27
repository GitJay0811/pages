;(function(){
    const inputs = document.querySelectorAll('.controls input');
    function handle(){
        document.documentElement.style.setProperty('--'+this.name,this.value+(this.dataset.sizing || ''));
    }
    inputs.forEach(function(input){
        input.addEventListener('change',handle);
        input.addEventListener('mousemove',handle);
    });
})()