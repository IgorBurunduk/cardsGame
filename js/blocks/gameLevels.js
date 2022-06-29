function gameLevels(screen) {

    const gameLevelsTemplate = templateEngine({
        tag: 'div',
        cls: 'levels',
        content: [{
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(GAME_LEVELS)[0]
                },
                content: GAME_LEVELS.easy
            },
            {
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(GAME_LEVELS)[1]
                },
                content: GAME_LEVELS.medium
            },
            {
                tag: 'div',
                cls: 'levels__item',
                attrs: {
                    'data-level': Object.keys(GAME_LEVELS)[2]
                },
                content: GAME_LEVELS.hard
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