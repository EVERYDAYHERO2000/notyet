(()=>{
    const cards = document.querySelectorAll('.cards');

    if (cards.length) {
        for (let i1 = 0; i1 < cards.length; i1++) {
            const el = cards[i1];
            const navigation = el.querySelector('.cards__nav');
            const buttons = navigation.querySelectorAll('.button_clear');
            
            for (let i2 = 0; i2 < buttons.length; i2++) {
                
                const btn = buttons[i2].addEventListener('click', function(event){
                    for (let i3 = 0; i3 < buttons.length; i3++){
                        buttons[i3].classList.remove('button_focus');
                    } 
                    this.classList.add('button_focus');

                    const content = el.querySelector('.cards__content');
                    content.classList.remove('cards__focus-card_1','cards__focus-card_2','cards__focus-card_3');
                    content.classList.add(`cards__focus-${this.dataset.target}`);

                });

            }

            
        }
    }
})();