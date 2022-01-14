$(document).ready(function () {
  // Маска ввода в текстовом инпуте
  function initTelMask() {
    let $inputTel = $('.popup__input-text--tel');
    if ($inputTel.length > 0) {
      $inputTel.mask('+7 (999) 999-99-99');
    }
  }

  // Открыть/закрыть опросник
  function showCloseQuestPopup() {
    let $popUp = $('[data-btn-popup="quest"]');
    if ($popUp.length > 0) {
      $popUp.on('click', function () {
        $('.popup[data-popup="quest"]').toggleClass('popup--active');
        $('body').css('overflow-y', 'hidden');
      });
      $('.popup[data-popup="quest"] .popup__close').on('click', function () {
        $('.popup[data-popup="quest"]').toggleClass('popup--active');
        $('body').css('overflow-y', 'auto');
      });
    }
  }

  // Открыть/закрыть форму обратной связи
  function showCloseFeedbackFormPopup() {
    let $popUp = $('[data-btn-popup="feedbackform"]');
    if ($popUp.length > 0) {
      $popUp.on('click', function () {
        $('.popup[data-popup="feedbackform"]').toggleClass('popup--active');
        $('body').css('overflow-y', 'hidden');
      });
      $('.popup[data-popup="feedbackform"] .popup__close').on('click', function () {
        $('.popup[data-popup="feedbackform"]').toggleClass('popup--active');
        $('body').css('overflow-y', 'auto');
      });
    }
  }

  // Init
  initTelMask();
  // showCloseQuestPopup();
  // showCloseFeedbackFormPopup();
});

$(window).on('load', function() {
  // animationOfNumbers();
  // magnetizationOfCirclesToTheCursor();
});

// Круги, которые магнитятся к кругам
function magnetizationOfCirclesToTheCursor() {
  let $brandsItem = $('.brands__item');
  if ($brandsItem.length > 0) {
    let windowWidth = $(window).outerWidth();
    $(window).on('resize', function () {
      windowWidth = $(window).outerWidth();
    });

    if (windowWidth >= 960) {
      // For ever Button found, run this function
      $(document).on('mousemove touch', function (e) {
        $brandsItem.each(function () {
          magnetize(this, e);
        });
      });

      function magnetize(el, e) {
        var mX = e.pageX,
          mY = e.pageY;
        const item = $(el);

        const customDist = item.data('dist') * 20 || 120;
        const centerX = item.offset().left + (item.width() / 2);
        const centerY = item.offset().top + (item.height() / 2);

        var deltaX = Math.floor((centerX - mX)) * -0.45;
        var deltaY = Math.floor((centerY - mY)) * -0.45;

        var distance = calculateDistance(item, mX, mY);
        // console.log(distance);
        if (distance < customDist) {
          TweenMax.to(item, 0.5, {y: deltaY, x: deltaX, scale: 1.1});
          item.addClass('magnet');
        } else {
          TweenMax.to(item, 0.6, {y: 0, x: 0, scale: 1});
          item.removeClass('magnet');
        }
      }

      function calculateDistance(elem, mouseX, mouseY) {
        console.log(`elem.offset().left: ${elem.offset().left}`);
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
      }
    }
  }
}

function animationOfNumbers() {
  let $list = $('.info--numbers .info__list');
  
  if ($list.length > 0) {
    let show = true;
    let countbox = '.info--numbers .info__list';
    $(window).on('scroll load resize', function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      let w_height = $(window).height(); // Высота окна браузера
      let d_height = $(document).height(); // Высота всего документа
      let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.counter__title').css('opacity', '1');
        $('.counter__title').spincrement({
          thousandSeparator: "",
          duration: 2000
        });

        show = false;
      }
    });
  }
}