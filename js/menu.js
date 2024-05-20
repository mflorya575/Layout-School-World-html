const menu = () => {
    const menuBody = document.querySelector('.menu__body');
    const menuIcon = document.querySelector('.menu__icon');

    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('_open')
    })
}
menu();