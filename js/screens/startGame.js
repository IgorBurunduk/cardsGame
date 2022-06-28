function startGame(appBlock) {

    const startGameTemplate = templateEngine({
        tag: 'div',
        cls: 'base-block',
        content: [{
                tag: 'h2',
                cls: 'base-block__title',
                content: MESSAGES.titles.startGame
            },
            {
                tag: 'div',
                cls: 'base-block__content',
            },
            {
                tag: 'div',
                cls: 'base-block__btn'
            }
        ]
    });

    const startGameContent = startGameTemplate.querySelector('.base-block__content');
    const startGameBtn = startGameTemplate.querySelector('.base-block__btn');

    startGameContent.appendChild(window.app.gameBlocks['levels'](startGameTemplate));
    startGameBtn.appendChild(window.app.gameBlocks['game-btn'](startGameTemplate));
    
    appBlock.appendChild(startGameTemplate);

    return startGameTemplate;
}

window.app.gameScreens['start-game'] = startGame;