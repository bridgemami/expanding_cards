const cards = document.querySelectorAll('.panel');
//remove all the active class
const removeActiveClasses= ()=> {
    cards.forEach(card => {
     card.classList.remove('active');   
    })
    }
    //first remove all active classes before addinging it
cards.forEach((card)=> {
        card.addEventListener('click', ()=> {
            removeActiveClasses();
            card.classList.add('active');
})
})

