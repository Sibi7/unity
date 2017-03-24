$(document).ready(function () {

    /*header mobile menu*/
    var pull = $('#header-menu'),//блок с кнопкой мобильного меню
        menu = $('.nav-top'),//главное меню
        button = pull.find('.mob-btn');//кнопка показать/скрыть
    menuHeight = menu.height();

    $(pull).on('click', function (e) {//при клике на мобильное меню
        e.preventDefault();//убираем свойство ссылки по умолчанию
        if (button.hasClass('show')) {//при наличии у кнопки активного класса
            button.removeClass('show');//убираем данный класс
            menu.slideUp('fast');//скрываем меню
        } else {//при отсутсвии активного класса
            button.addClass('show');//добовляем его кнопке
            menu.slideDown('fast');//показываем меню
        }
    });
    $(document).on('click', function (e) {//при клике на поле
        if ($(e.target).closest('.header__navbar').length != 1) {//не содержащего навигационную панель
            $('.nav-top').slideUp('fast');//скрываем меню
            $('.mob-btn').removeClass('show');//убираем у кнопки активный класс
        }
    });
    /*close header mobile menu*/

    /*animate scroll menu*/
    $(document).on('click', '.nav-top a', function (event) {/*функция прокрутки на блок страницы при клике по элементам меню */
        event.preventDefault();
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;
        $('html,body').animate({scrollTop: top}, 1000);
        return false;
    });
    /*close animate scroll menu*/

    /*block animation*/
    var windowHeight = $(window).height();//переменная для определения высоты окна
    var elements = $('.how'),//блок элементов
        item = $('.how__box--item');//скрытый елемент

    $(window).scroll(function () {//при прокрутке окна
        if (($(this).scrollTop() + windowHeight) >= elements.offset().top) {//до начала блока с классом how
            item.each(function (i) {//функция задержки появления каждого элемента
                $(this).delay((i++) * 500).fadeTo(1000, 1);
            });
        }
    });
    /*close block animation*/

    /*top-form validation*/
    if (document.getElementById('top-form')) {
        var validation = new Validation();
        validation.init({
            ajax: true,
            ajaxUrl: myajax.url,
            classItem: "main-form__field",//елемент, который нужно провалидировать
            eventElement: '#top-form-submit',//событие по клику кнопки 'Отправить'
            items: [//масив объектов
                {
                    item: 'email', tpl: 'email', tplMsg: 'некорректный e-mail'//объект эл.почта с сообщением о некорректном вводе
                },
                {
                    item: 'name', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
                },
                {
                    item: 'phone', tpl: 'number', tplMsg: 'только цыфры'//объект имя с сообщением о некорректном вводе
                },
                {
                    item: 'obj', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
                },
                {
                    item: 'time', tpl: 'kir+lat', tplMsg: 'только буквы'//объект имя с сообщением о некорректном вводе
                }
            ],
            ajaxSubmitSuccess: function (responseText, err, form) {

                var formData = new FormData(form);//объявляем новую FormData
                formData.append('action', 'getmessage');//задаем действие и значение
                if (!err) {
                    $.ajax({
                        url: myajax.url,
                        type: "POST",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            console.log(data);
                            if (data.result === 'success') {
                                form.reset();
                            } else {
                                alert('Некорректно заполнено!!')
                            }
                        }
                    });
                    return false;
                }
                return false;
            }
        });
    }
    /*top-form validation*/

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
        result = oneProcent * 64;
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
        result3 = oneProcent * 64;

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
            if (deegres >= result) clearInterval(acrInterval);
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
            if (deegres >= result) clearInterval(acrInterval);
        }, fps);

    }

}
$(document).ready(function(){
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