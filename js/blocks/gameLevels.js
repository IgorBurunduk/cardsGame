function gameLevels(screen) {

    const gameLevelsTemplate = templateEngine({
        tag: 'div',
        cls: 'levels',
        content: [{
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(MESSAGES.levels)[0]
                },
                content: MESSAGES.levels.easy
            },
            {
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(MESSAGES.levels)[1]
                },
                content: MESSAGES.levels.medium
            },
            {
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(MESSAGES.levels)[2]
                },
                content: MESSAGES.levels.hard
            }
        ]
    });

    gameLevelsTemplate.addEventListener('click', levelsBlockHandler);
    
    screen.appendChild(gameLevelsTemplate);

    return gameLevelsTemplate;

}

window.app.gameBlocks['levels'] = gameLevels;

function levelsBlockHandler(evt) {
    const target = evt.target;
    if (target.classList.contains('levels__item')) {
        const activeLevelBlock = document.querySelector('.levels__item.active');

        if(activeLevelBlock) activeLevelBlock.classList.remove('active');

        target.classList.add('active');

        window.app.selectedLevel = target.dataset.level;
    }
}