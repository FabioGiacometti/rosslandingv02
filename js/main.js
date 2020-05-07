(function ($) {
  'use strict';


  markMenu();

  function markMenu() {
    var locationObj = $(location);
    var current_url = locationObj.attr('href');
    var current_url = current_url.replace(locationObj.attr('protocol')+'//'+locationObj.attr('host'),'');
    var current_url = current_url.replace('.html','');
    var url_array = current_url.split('/');
    var last = '';

    for (var i = 0; i < url_array.length; ++i) {
      if (url_array[i]) {
        last = last+'/'+url_array[i];
        $('a[href="'+last+'.html"]').addClass('active');
      }
    }
  }


  var $app = $('#app');
  var $sticky = $('.sticky');
  var $header = $('.header');

  var $scrollPosition = null;
  var $scrollSize = null;
  var $stickySize = null;
  var $viewSize = null;

  function mainTasks() {
    $scrollPosition = $(window).scrollTop();
    $scrollSize = $header.outerHeight();
    $stickySize = $sticky.outerHeight();
    $viewSize = $(window).width();

    $(window).on('load scroll', function () {
      $scrollPosition = $(window).scrollTop();

      if ($scrollPosition >= $stickySize) {
        $app.addClass('has-scroll');
      } else {
        $app.removeClass('has-scroll');
      }
    });

    $('.js-scroll').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $this = $(this);
        var $target = $(this.hash);
        var $offset = $this.data("offset") === undefined ? 0 : $this.data("offset");

        $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');

        if ($target.length) {
          $('html, body').stop().animate({
            scrollTop: $target.offset().top - $offset
          }, 1000);

          return false;
        }
      }
    });
  }

  mainTasks();

  $(window).on('resize', function () {
    mainTasks();
  });


  $('.js-toggle').on('click', function (event) {
    event.preventDefault();
    var $btn = $(this);
    var $target = $btn.data('target') || $btn.attr('href');
    var $toggle = $btn.data('toggle') || 'active';
    var $self = $btn.data('self') || 'active';

    $btn.stop().toggleClass($self);
    $($target).stop().toggleClass($toggle);
  });

  if ($(window).width() < 992) {
    $('.nav a').on('click', function (e) {
      $('.hamburger').click();
    })
  }


  $.each($('.cover'), function () {
    var $this = $(this);
    var $imgSrc = $this.find('img').attr('src');
    $this.css('background-image', 'url(' + $imgSrc + ')');
  });


  var $prevArrow =
    '<button class="slick-prev" type="button">'+
      '<svg class="svg-icon block text-dark rotate-180"><use xlink:href="#icon-pointer"></use></svg>'+
    '</button>';

  var $nextArrow =
    '<button class="slick-next" type="button">'+
      '<svg class="svg-icon block text-dark"><use xlink:href="#icon-pointer"></use></svg>'+
    '</button>';

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    prevArrow: $prevArrow,
    nextArrow: $nextArrow
  });


  function validateInput($input) {
    if (!!$input.val() === false) {
      $input.parents('.form-group').addClass('has-error');
    } else if (!!$input.hasClass('form-control--err')) {
      $input.parents('.form-group').addClass('has-error');
    } else {
      $input.parents('.form-group').removeClass('has-error');
    }
  }

  $('.is-required').on('focusout keyup change', function () {
    var $this = $(this);
    validateInput($this);
  });

  $('.check-form').on('submit', function (event) {
    var $form = $(this);
    var $input = $form.find('.is-required');
    var $inputErr = $form.find('.has-error');
    var $invalids = 0;

    $input.each(function (index, value) {
      var $this = $input.eq(index);
      validateInput($this);

      if (!!$this.val() === false) {
        $invalids++
      }
    });

    $inputErr.each(function (indexErr, value) {
      var $this = $inputErr.eq(indexErr);
      validateInput($this);

      if (!!$this.val() === false) {
        $invalids++
      }
    });

    if (!!$invalids) {
      return false;
    } else {
      return true;
    }
  });
}(jQuery));
