$(document).ready(function () {

    var headerButton = $('.hamburger'), // обратился к объекту кнопка
        headerNav = $('.header__nav'); // при загрузке документа нашел объект c classom
    $(headerButton).on('click', function (event) { // повесил событие на объект .sandwich-button
        event.preventDefault(); // убрал стандартное свойство ссылки
        if($(this).hasClass('open')){ //  проверяет наличие класса у селектора .sandwich-button
            $(this).removeClass('open'); // если есть ксласс, он удаляется при проверке
            headerNav.slideUp(500); // скрываем вверх блок меню header.nav
        } else {
            $(this).addClass('open'); //иначе добавляется класс open
            headerNav.slideDown(500);// и появляется блок меню
        }
    });


    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


window.onload = function () {
    var can = document.getElementById('canvas'),
        can3 = document.getElementById('canvas3'),
        can2 = document.getElementById('canvas2');
    spanProcent = document.getElementById('procent'),
        spanProcent2 = document.getElementById('procent1'),
        spanProcent2 = document.getElementById('procent1');
    c = can.getContext('2d'),
    c2 = can2.getContext('2d'),
    c3 = can3.getContext('2d');

    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * 32;
    var posX1 = can2.width / 2,
        posY1 = can2.height / 2,
        fps1 = 1000 / 200,
        procent1 = 0,
        oneProcent1 = 360 / 100,
        result1 = oneProcent * 64;
    var posX3 = can2.width / 2,
        posY3 = can2.height / 2,
        fps3 = 1000 / 200,
        procent3 = 0,
        oneProcent3 = 360 / 100,
        result3 = oneProcent * 80;

    c.lineCap = 'round';
    arcMove();
    c2.lineCap = 'round';
    arcMove2();
    c3.lineCap = 'round';
    arcMove3();

    function arcMove() {
        var deegres = 0;
        var acrInterval = setInterval(function () {
            deegres += 1;
            c.clearRect(0, 0, can.width, can.height);
            // procent = deegres / oneProcent;

            // spanProcent.innerHTML = procent.toFixed();

            c.beginPath();
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c.strokeStyle = '#242535';
            c.lineWidth = '10';
            c.stroke();

            c.beginPath();
            c.strokeStyle = '#e37222';
            c.lineWidth = '10';
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c.stroke();
            if (deegres >= result) clearInterval(acrInterval);
        }, fps);

    }
    function arcMove2() {
        var deegres = 0;
        var acrInterval = setInterval(function () {
            deegres += 1;
            c2.clearRect(0, 0, can2.width, can2.height);
            procent = deegres / oneProcent;

            // spanProcent.innerHTML = procent.toFixed();

            c2.beginPath();
            c2.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c2.strokeStyle = '#242535';
            c2.lineWidth = '10';
            c2.stroke();

            c2.beginPath();
            c2.strokeStyle = '#e37222';
            c2.lineWidth = '10';
            c2.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c2.stroke();
            if (deegres >= result1) clearInterval(acrInterval);
        }, fps);

    }
    function arcMove3() {
        var deegres = 0;
        var acrInterval = setInterval(function () {
            deegres += 1;
            c3.clearRect(0, 0, can3.width, can3.height);
            procent = deegres / oneProcent;

            // spanProcent.innerHTML = procent.toFixed();

            c3.beginPath();
            c3.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c3.strokeStyle = '#242535';
            c3.lineWidth = '10';
            c3.stroke();

            c3.beginPath();
            c3.strokeStyle = '#e37222';
            c3.lineWidth = '10';
            c3.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c3.stroke();
            if (deegres >= result3) clearInterval(acrInterval);
        }, fps);

    }

}
