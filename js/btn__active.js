var $sections = $('section');
var section_position = {}; //тут храним все верхние точки наших section
var screen_height = $(window).height(); //высота видимой страницы

checkPosition();

$(window).resize(function(){
  checkPosition();
});

function checkPosition(){
  screen_height = $(window).height();

  $sections.each(function(i, el) {
    section_position[i] = $(el).offset().top - 0;
  });
}

function toggleActiveClass(id) {
  $('a.active').removeClass('active');
  $('a[href="#' + id + '"]').addClass('active');
}

$(window).scroll(function() {
  var s_top = $(document).scrollTop() + screen_height / 2;

  for (key in section_position) {

    if (s_top >= section_position[key] || s_top <= section_position[key + 1]) {
      var id = $($sections[key]).attr('id');
      toggleActiveClass(id);
    }

  };

});

$("page-homepage-header").on("click", "a", function(event) {
  event.preventDefault();
  id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 800);
});
