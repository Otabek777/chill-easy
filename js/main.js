// Header Fixed
$(window).on('scroll', function () {
    $(".header").toggleClass("fixed", $(this).scrollTop() > 50);
});

$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".catalog_menu").removeClass("active");
        $(".header__navbar").removeClass("active");
        $("body").removeClass("hidden");
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header__navbar").addClass("active");
        $("body").addClass("hidden");
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    }
});

// Мобилка, открывает меню слево aside
if(document.querySelector('.dashboard__aside')) {
    $(".open-aside").addClass("active");
    $(".open-aside").click(function() {
        $(".dashboard__aside").addClass("active");
        $("body").addClass("hidden");
    });
    $(".aside__close").click(function() {
        $(".dashboard__aside").removeClass("active");
        $("body").removeClass("hidden");
    });
};

// Search
$(".open-search").click(function() {
    $(".search_block").addClass("active");
    setTimeout(function() {
        $(".search_block").addClass("open");
    },10);
});
$(".search_close").click(function() {
    $(".search_block").removeClass("open");
    setTimeout(function() {
        $(".search_block").removeClass("active");
    },300);
});

// header menu catalog desktop
if ($(window).width() > 1160) {
    $(".header__navbar li").hover(
        function() {
            // Навели на пункт меню
            var catalogThis = $(this);
            $(catalogThis).find('.catalog_menu').addClass('active');
            setTimeout(function() {
                $(catalogThis).find('.catalog_menu').addClass('open');
            },10);
        },
        function() {
            // Убрали мышку с пункта меню
            var catalogThis = $(this);
            $(catalogThis).find('.catalog_menu').removeClass('open');
            setTimeout(function() {
                $(catalogThis).find('.catalog_menu').removeClass('active');
            },500);
        }
    );

    $(".catalog_menu .close").hover(
        function() {
            // Навели на пункт меню
            $(".catalog_menu").removeClass("open");
            setTimeout(function() {
                $(".catalog_menu").removeClass("active");
            },500);
        }
    );
} else {
    // header menu catalog tab mobile
    $(".menu-mobile-right").click(function() {
        $(this).next('.catalog_menu').addClass('active');
    });
    $(".catalog_menu .close").click(function() {
            // Навели на пункт меню
            setTimeout(function() {
                $(".catalog_menu").removeClass("active");
            },10);
        }
    );
};

// Like btn
if(document.querySelector('.card__like')) {
    $(".card__like").click(function() {
        $(this).toggleClass("active");
    });
};

// Sliders
$(document).ready(function () {
    const sliders = [];

    // Всегда добавляем banner__slider
    sliders.push({
    selector: '.banner__slider',
    options: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 900,
        fade: true,
        dots: true,
        arrows: true
    }
    });

    // Добавляем card__slider и magazine__slider только при ширине > 1160px
    if ($(window).width() > 767) {
        sliders.push({
            selector: '.card__slider',
            options: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true
            }
        });
        sliders.push({
            selector: '.magazine__slider',
            options: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [
                    {
                    breakpoint: 1160,
                    settings: {
                        slidesToShow: 2
                    }
                    }
                ]
            }
        });
    }

    // Инициализируем все слайдеры
    sliders.forEach(slider => {
    $(slider.selector).slick(slider.options);
    });
});

if ($('.product__img-main').length && $('.product__img-nav').length) {
  $('.product__img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.product__img-nav',
    responsive: [
        {
        breakpoint: 1160,
        settings: {
            dots: true
        }
        }
    ]
  });
  $('.product__img-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.product__img-main',
    arrows: false,
    dots: false,
  });
}


// Счетчик
if(document.querySelector('.quantity')) {
    $(document).ready(function () {
        $('.plus').click(function () {
            const $input = $(this).siblings('.number');
            let value = parseInt($input.val(), 10);
            $input.val(value + 1);
        });

        $('.minus').click(function () {
            const $input = $(this).siblings('.number');
            let value = parseInt($input.val(), 10);
            if (value > 1) {
                $input.val(value - 1);
            }
        });

        // Главный чекбокс: выбрать/снять все
        $('#check-all').on('change', function () {
            const checked = $(this).is(':checked');
            $('.item-check').prop('checked', checked);
        });

        // Подчинённые чекбоксы: если все выбраны — включить главный; если нет — выключить
        $('.item-check').on('change', function () {
            const total = $('.item-check').length;
            const checked = $('.item-check:checked').length;

            $('#check-all').prop('checked', total === checked);
        });

        // Кнопка: снять отметки со всех выбранных
        $('#uncheck-selected').on('click', function () {
            $('.item-check:checked').prop('checked', false);
            $('#check-all').prop('checked', false);
        });
    });
};

// Question Toggle ACCORDION
function initToggle(selector) {
  if ($(selector).length) {
    $(selector).each(function() {
      if ($(this).hasClass("open")) $(this).next().slideDown(0);
    }).click(function() {
      const btn = $(this);
      btn.toggleClass("open");
      btn.next().slideToggle(300);
    });
  }
};

initToggle(".product__accordeon .btn");
initToggle(".order_top");
initToggle(".product__size .btn");

if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
};

// modal
function closeModal() {
    $('body').removeClass("hidden");
    $('.modal').removeClass("open-reg open-auth open-filter");
    setTimeout(() => $('.modal').removeClass("active"), 300);
}

$(".open-reg").click(function() {
    $('body').addClass("hidden");
    $('.modal').removeClass("open-auth").addClass("active");
    setTimeout(() => $('.modal').addClass("open-reg"), 1);
});

$(".open-auth").click(function() {
    $('body').addClass("hidden");
    $('.modal').addClass("active");
    setTimeout(() => $('.modal').addClass("open-auth"), 1);
});

$(".open-filter").click(function() {
    $('body').addClass("hidden");
    $('.modal').addClass("active");
    setTimeout(() => $('.modal').addClass("open-filter"), 1);
});

$('.modal').click(function(e) {
    if (e.target === this) closeModal();
});

$(".modal__close").click(closeModal);

$("#authBtn1, #authBtn2").click(function() {
    const isFirst = this.id === "authBtn1";
    $("#authBtn1, #auth1").toggleClass("active", isFirst);
    $("#authBtn2, #auth2").toggleClass("active", !isFirst);
});