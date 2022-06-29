function gameArea(appBlock, selectedLevel) {

    clearBlock(appBlock);

    const gameAreaTemplate = templateEngine({
        tag: 'h1',
        cls: 'game-area',
        content: selectedLevel
    });

    appBlock.appendChild(gameAreaTemplate);

    return gameAreaTemplate;

}

window.app.gameScreens['game-area'] = gameArea;