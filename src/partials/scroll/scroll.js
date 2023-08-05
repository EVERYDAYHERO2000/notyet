(()=>{

    function hasClass(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }

    let img = document.querySelectorAll('.anim-show');

    for (let index = 0; index < img.length; index++) {
        img[index].classList.add('anim-show_ready');
    }

    document.addEventListener('scroll',function(el){
        let doc = document.documentElement;
        let currentTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        for (let index = 0; index < img.length; index++) {
            let elBox = img[index].getBoundingClientRect();

            if (elBox.y < window.outerHeight/1.5){
                
                if (hasClass(img[index], 'anim-show_ready')){
                    setTimeout(function(){
                        img[index].classList.remove('anim-show_ready');
                        img[index].classList.add('anim-show_complete');
                    },100 * (index + 1));
                }

            } else {
                if (hasClass(img[index], 'anim-show_complete')) {
                    img[index].classList.add('anim-show_ready');
                    img[index].classList.remove('anim-show_complete');
                }

            }
            
        }

    });    
})();