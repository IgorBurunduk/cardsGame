const levelsBlock = document.querySelector('.levels');
const levelsBlockItems = levelsBlock.querySelectorAll('.levels__item');
levelsBlock.addEventListener('click', levelsBlockHandler);


function levelsBlockHandler (evt){
    const target = evt.target;
    if(target.classList.contains('levels__item')){

        levelsBlockItems.forEach(item=>{
            item.classList.remove('active');
        })

        target.classList.add('active');

        window.app.selectedLevel = target.dataset.level;
    }
}
