document.addEventListener('DOMContentLoaded', function () {

    const appBlock = document.querySelector('.app');

    appBlock.appendChild(loadGame());

    window.onload = () => {
        hideLoading();

        window.app.gameScreens['start-game'](appBlock);
    }

});

function loadGame() {

    const loadGameTemplate = templateEngine({
        tag: 'img',
        cls: 'loading',
        attrs: {
            src: './images/load.svg',
            alt: 'Загружаем'
        }
    });

    return loadGameTemplate;

}

function hideLoading() {
    const loadingBlock = document.querySelector('.loading');
    loadingBlock.remove();
}