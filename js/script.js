//сщздание двигающихся точек
let boxshadow = '';
for (let i = 0; i <= 2000; i++) {
    px = (Math.random() < 0.5) ? '-' : '';
    py = (Math.random() < 0.5) ? '-' : '';
    x = Math.floor(Math.random() * window.innerWidth + 1)
    y = Math.floor(Math.random() * window.innerHeight + 1)
    s = Math.floor(Math.random() * 2 - 1);
    boxshadow += px + x + 'px ' + py + y + 'px 0 ' + s + "px #fff,";
}
boxshadow = boxshadow.slice(0, -1);
stars.style.boxShadow = boxshadow;
//========================================================================
let imgS = document.querySelectorAll('#container div img')
let priz = document.querySelector('#container div:first-child')
for (let i = 0; i < imgS.length; i++) {
    imgS[i].onclick = function () {
        if (imgS[i].dataset.id === '1') {
            priz.innerHTML = `С Рождеством Христовым, <br>  
    С праздником добра,<br> 
            Света и терпенья,<br> 
                Мира вам всегда! <br> 
    От обид избавьтесь,<br> 
            И от всех хлопот,<br> 
                Пусть для вас успешен<br> 
    Будет этот год!`
            priz.style.fontSize = '27px'

        }
        if (imgS[i].dataset.id === '2') {
            priz.innerHTML = ` Поздравляю с Новым годом <br>
    И счастливым Рождеством!<br>
    Эти праздники наполнят<br>
    Сердце добрым волшебством!<br> 
    Пусть они подарят сказку,<br>
    Принесут в наш мир любовь,<br>
    Чтобы было в нем побольше<br>
    Добрых дел и добрых слов!`
            priz.style.fontSize = '22px'

        }
        if (imgS[i].dataset.id === '3') {
            priz.innerHTML = ` С Новым годом, с Рождеством!<br>
Пусть с добром войдут в ваш дом,<br>
Принеся с собой в придачу<br>
Счастье, радость и удачу!<br>

Много ярких, светлых дней,<br>
Продуктивных вам идей.<br>
Пусть здоровье не подводит<br>
При любой в году погоде!`
            priz.style.fontSize = '21px'

        }

    }
}