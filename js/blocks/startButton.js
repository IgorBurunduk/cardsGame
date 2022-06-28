function startButton (screen) {

    const startButtonTemplate = templateEngine({
        tag: 'button',
        cls: 'btn',
        content: MESSAGES.buttons.start
    });

    startButtonTemplate.addEventListener('click', btnClickHandler);
    
    screen.appendChild(startButtonTemplate);

    return startButtonTemplate;
}

window.app.gameBlocks['game-btn'] = startButton;


function btnClickHandler (evt) {
    evt.preventDefault();

    const appBlock = document.querySelector('.app');

    const selectedLevel = window.app.selectedLevel;

    if(!selectedLevel){
        alert('Нужно выбрать сложность!');
        return;
    }

    window.app.gameScreens['game-area'](appBlock, selectedLevel);
}