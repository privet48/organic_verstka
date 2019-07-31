$(document).ready(function () {


  /*header nav*/
  $('.js-nav-btn').on('click', function (e) {
    e.preventDefault();
    $('.js-nav-content').slideToggle(300);
  });

  $('.js-dropdown-btn').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.js-dropdown-content').slideToggle(300);
  });


  ////tabs
  $(function () {
    $('[data-container="tabs"]').each(function () {
      var $this = $(this);

      $this.find('[data-section="tabs"]').eq(0).addClass('is-active');
      $this.find('[data-action="tabs"]').eq(0).addClass('is-active');
    });

    $(document).on('click', '[data-action="tabs"]', function () {
      var $action = $(this),
        $container = $action.closest('[data-container="tabs"]'),
        $section = $('[data-section="tabs"]', $container);

      $action.addClass('is-active').siblings('[data-action="tabs"]').removeClass('is-active');
      $section.removeClass('is-active').siblings('[data-id="' + $action.data('type') + '"]').addClass('is-active');
    });
  });

  //custom form
  $('select, input[type="number"], input[type="radio"]').styler();


  $(".js-popup").fancybox({
    padding: 0
  });
	$(document).on('click','.js-popup-product',function(e){
		e.preventDefault();
		$this=$(this);
		$.fancybox({
			padding:0,
			href: $this.attr('data-url'),
			type: 'ajax'
		});		
	});

  ///*toogle*/
  //$('.js-toggle').on('click',function(e){
  //    e.preventDefault();
  //    $(this).siblings('.js-toggle-content').slideToggle(300);
  //});
  //

  //if ($(".sidebar li").hasClass("active")) {
  //    $(".sidebar li.active").find(".js-toggle-content").show();
  //}


  //function windowSize(){
  //    if (window.outerWidth < 1050){
  //        $('.catalog-nav__name').on('click',function(){
  //            $(this).siblings('.catalog-nav__menu').slideToggle(300);
  //        });
  //
  //        $('.catalog-nav__menu > li i').on('click',function(){
  //            $(this).siblings('.catalog-nav__menu > li ul').slideToggle(300);
  //            $(this).toggleClass("active");
  //        });
  //
  //        $('.basket-prev i').on('click',function(){
  //            $(".basket-prev__hidden").slideToggle(300);
  //            //$(this).toggleClass("active");
  //        });
  //
  //
  //    }
  //}
  //$(window).on('load resize',windowSize);


  //if (window.outerWidth < 768){
  // if ($('.header__bottom').length > 0) {
  //   //fixed-block
  //   (function () {  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
  //     var a = document.querySelector('.header__bottom'), b = null;  // селектор блока, который нужно закрепить
  //     window.addEventListener('scroll', Ascroll, false);
  //     document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
  //     function Ascroll() {
  //       if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
  //         var Sa = getComputedStyle(a, ''), s = '';
  //         for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
  //           if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
  //             s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
  //           }
  //         }
  //         b = document.createElement('div');  // создать потомка
  //         b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
  //         a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
  //         var l = a.childNodes.length;
  //         for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
  //           b.appendChild(a.childNodes[1]);
  //         }
  //         a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
  //         a.style.padding = '0';
  //         a.style.border = '0';  // если элементу присвоен padding или border
  //       }
  //       if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
  //         b.className = 'sticky';
  //       } else {
  //         b.className = '';
  //       }
  //       window.addEventListener('resize', function () {
  //         a.children[0].style.width = getComputedStyle(a, '').width
  //       }, false);  // если изменить размер окна браузера, измениться ширина элемента
  //     }
  //   })();
  // }
  //}


  /*slider-gallery*/
  // $('.js-gallery').fancybox({
  //    padding:10
  //});


  // var scrollTo = function() {
  //   var anchor = $(this).attr("href");
  //   var hAnchor = $(anchor).offset().top;
  //скролим
  //     $('html,body').animate( { scrollTop: hAnchor }, 700 );
  //      return false;
  //   };
  //   $(function(){
  //       $('.navigation a').on('click', scrollTo);
  //  });


  //считаем слайды
  //var $status = $('.pagingInfo');
  //var $slickElement = $('.slideshow');
  //
  //$slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
  //    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  //    var i = (currentSlide ? currentSlide : 0) + 1;
  //    $status.text(i + '/' + slick.slideCount);
  //});
  //
  //$slickElement.slick({
  //    autoplay: false,
  //    dots: false
  //});


  ///*main-slider*/
  //$('.js-main-slider').slick({
  //  //  autoplay: true,
  //  //  autoplaySpeed: 3000,
  //  //  slidesToShow: 6,
  //   //     slidesToScroll: 1,
  //   //     responsive: [
  //    //    {
  //    //        breakpoint: 1200,
  //     //       settings: {
  //     //           slidesToShow: 4,
  //    //            slidesToScroll: 1
  //    //        }
  //    //    },
  //     //   {
  //     //       breakpoint: 991,
  //     //       settings: {
  //      //          slidesToShow: 3,
  //      //          slidesToScroll: 1
  //     //       }
  //     //   },
  //     //   {
  //      //      breakpoint: 768,
  //      //      settings: {
  //      //          slidesToShow: 1,
  //      //          slidesToScroll: 1
  //     //       }
  //    //    }
  //    //],
  //       // focusOnSelect :  true
//	 prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  //      nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',,
  //    //fade: false,
  //    arrows:true,
  //    dots:true
  //});


  ///   scroll   /
  var scrollTo = function() {
     var anchor = $(this).attr("href");
     var hAnchor = $(anchor).offset().top;
     //скролим
     $('html,body').animate( { scrollTop: hAnchor }, 700 );
     return false;
  };
  $(function(){
     $('.header-navigation a').on('click', scrollTo);
  });
  //
  //
  //$('.navigation-menu').on('click',function(){
  //    $('.navigation').slideToggle();
  //});
  //$('.navigation li a').on('click',function(){
  //    $('.navigation').slideUp();
  //});


  //$('.catalog-section__content-col:gt(3)').css('display' , 'none');
  //$('.js-show-more').on('click' , function(e){
  //    e.preventDefault();
  //    $('.catalog-section__content-col:gt(3)').slideToggle(300);
  //    $(this).toggleClass('active');
  //    if($(this).hasClass('active')){
  //        $(this).html('свернуть');
  //    }else{
  //        $(this).html('Показать все');
  //    }
  //});
  var heightHeader = $('.header').outerHeight();
  var heightFooter = $('.footer').outerHeight();
  var sumHeightFooterHeader = heightHeader + heightFooter

  $('.page-box-content').css(
    'min-height', 'calc(100vh - ' + sumHeightFooterHeader + 'px'
  )

});
