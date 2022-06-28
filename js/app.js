const levelsBlock = document.querySelector('.levels');
const levelsItems = levelsBlock.querySelectorAll('.levels__item');
levelsBlock.addEventListener('click', levelsBlockHandler);


function levelsBlockHandler (evt){
    const target = evt.target;
    if(target.classList.contains('levels__item')){

        levelsItems.forEach(item=>{
            item.classList.remove('active');
        })
        
        target.classList.add('active');

        const gameLevel = target.dataset.level;
        window.app.selectedLevel = gameLevel;
    }
}
