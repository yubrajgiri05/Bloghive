$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dot: false,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

//health-section
if (window.location.href == 'http://localhost/blog-hive/health.php') {
  $('.footer').addClass('health');
};
if (window.location.href == 'http://localhost/blog-hive/health.php') {
  $('.header').addClass('health-header');
};

//health-inner
if (window.location.href == 'http://localhost/blog-hive/health-inner.php') {
  $('.footer').addClass('health');
};
if (window.location.href == 'http://localhost/blog-hive/health-inner.php') {
  $('.header').addClass('health-header');
};

//technology-section
if (window.location.href == 'http://localhost/blog-hive/technology.php') {
  $('.footer').addClass('technology');
};
if (window.location.href == 'http://localhost/blog-hive/technology.php') {
  $('.header').addClass('technology-header');
};

//technology-inner
if (window.location.href == 'http://localhost/blog-hive/technology-inner.php') {
  $('.footer').addClass('technology');
};
if (window.location.href == 'http://localhost/blog-hive/technology-inner.php') {
  $('.header').addClass('technology-header');
};

//finance-section
if (window.location.href == 'http://localhost/blog-hive/finance.php') {
  $('.footer').addClass('finance');
};
if (window.location.href == 'http://localhost/blog-hive/finance.php') {
  $('.header').addClass('finance-header');
};

//finance-inner
if (window.location.href == 'http://localhost/blog-hive/finance-inner.php') {
  $('.footer').addClass('finance');
};
if (window.location.href == 'http://localhost/blog-hive/finance-inner.php') {
  $('.header').addClass('finance-header');
};

//travel-section
if (window.location.href == 'http://localhost/blog-hive/travel.php') {
  $('.footer').addClass('travel');
};
if (window.location.href == 'http://localhost/blog-hive/travel.php') {
  $('.header').addClass('travel-header');
};

//travel-inner
if (window.location.href == 'http://localhost/blog-hive/travel-inner.php') {
  $('.footer').addClass('travel');
};
if (window.location.href == 'http://localhost/blog-hive/travel-inner.php') {
  $('.header').addClass('travel-header');
};

//entertainment-section
if (window.location.href == 'http://localhost/blog-hive/entertainment.php') {
  $('.footer').addClass('entertainment');
};
if (window.location.href == 'http://localhost/blog-hive/entertainment.php') {
  $('.header').addClass('entertainment-header');
};

//entertainment-inner
if (window.location.href == 'http://localhost/blog-hive/entertainment-inner.php') {
  $('.footer').addClass('entertainment');
};
if (window.location.href == 'http://localhost/blog-hive/entertainment-inner.php') {
  $('.header').addClass('entertainment-header');
};
//parenting-section
if (window.location.href == 'http://localhost/blog-hive/parenting.php') {
  $('.footer').addClass('parenting');
};
if (window.location.href == 'http://localhost/blog-hive/parenting.php') {
  $('.header').addClass('parenting-header');
};

//parenting-inner
if (window.location.href == 'http://localhost/blog-hive/parenting-inner.php') {
  $('.footer').addClass('parenting');
};
if (window.location.href == 'http://localhost/blog-hive/parenting-inner.php') {
  $('.header').addClass('parenting-header');
};

/////header

var toggle = (function () {
  var visible = false,
      ele = document.getElementById('test'),
      btn = document.querySelector('.btn');
  
  function flip () {
    var display = ele.style.display;
    
    ele.style.display = (display === 'block' ? 'none' : 'block');
    visible = !visible;
  }
  
  btn.addEventListener('click', flip);
  
  ele.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  
  document.addEventListener('click', function (e) {
    if (visible && e.target !== btn) flip();
  });
  
  ele.style.display = 'none';
  
  return flip;
}());

$(document).keydown(function(e) {
  // ESCAPE key pressed
  if (e.keyCode == 27) {
      window.close();
  }
});
