function prewievImg() {
    const input = document.querySelector('input[data-upload-photo]');
    const preview = document.querySelector('.form-page__input img');

    input.addEventListener('change', function() {
        const file = this.files[0];

        if (file && file.type.match('image.*')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
            }

            reader.readAsDataURL(file);
        } else {
            alert('Пожалуйста загрузите картинку')
            preview.src = ''; // Очищаем изображение, если файл не является изображением
        }
    });
}