function toggleFormPagePanel() {
    let formPageInput = document.querySelectorAll('.form-page__input[data-panel]');

    formPageInput.forEach((item) => {
        let formPagePanel = item.querySelector('.form-page__panel');

        item.addEventListener('click', () => {
            formPageInput.forEach((otherItem) => {
                if (otherItem !== item) {
                    let otherPanel = otherItem.querySelector('.form-page__panel');
                    otherPanel.classList.remove('_open');
                }
            });

            formPagePanel.classList.toggle('_open');

            let formPagePanelItem = formPagePanel.querySelectorAll('li');
            formPagePanelItem.forEach((panelItem) => {
                panelItem.addEventListener('click', () => {
                    item.querySelector('span.form-page__input_text').textContent = panelItem.textContent;
                    item.querySelector('label').style.display = 'none';
                    setTimeout(() => {
                        formPagePanel.classList.remove('_open');
                    }, 0);
                })
            })
        })
    });
}
toggleFormPagePanel();