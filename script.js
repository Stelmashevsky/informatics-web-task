document.getElementById('animateButton').addEventListener('click', function() {
    
    const background_color = document.querySelector('.background');
    background_color.style.backgroundColor = background_color.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';

    const background_gif = document.getElementById('background');
    background_gif.style.display = 'flex'; // Показываем фон
    background_gif.innerHTML = '<img src="boom.gif" alt="Анимация" style="width: 100%; height: 100%; object-fit: cover;">';

    const audio = document.getElementById('audio');
    audio.play();

    // const background = document.getElementById('background');
    // const audio = document.getElementById('audio');

    // background.style.display = 'flex'; // Показываем фон
    // background.innerHTML = '<img src="boom.gif" alt="Анимация" style="width: 100%; height: 100%; object-fit: cover;" id="gifAnimation">';
    
    // audio.play(); // Проигрываем звук

    // // Удаляем GIF после его завершения
    // const gifAnimation = document.getElementById('gifAnimation');
    // gifAnimation.addEventListener('load', function() {
    //     const duration = 3000; // Укажите длительность анимации (в миллисекундах)
    //     setTimeout(() => {
    //         background.style.display = 'none'; // Скрываем фон
    //     }, duration);
    // });
});