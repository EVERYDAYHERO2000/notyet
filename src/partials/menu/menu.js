(()=> {
    
    const menu = document.querySelector('.menu');
    let scrollPos = 0;

    document.addEventListener('scroll',function(el){
        let doc = document.documentElement;
        let currentTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        
        if (currentTop < scrollPos || currentTop <= 0) {
            menu.classList.remove('menu_hidden');
        } else {
            menu.classList.add('menu_hidden');
        }
        scrollPos = currentTop;
    });

})();
