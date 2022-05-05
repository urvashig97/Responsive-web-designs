// Carousel

$(document).ready(function() {
  $(".carousel").carousel({ interval: 4000 });

  // Enable Carousel Indicators
  $(".item1").click(function() {
    $(".carousel").carousel(0);
    console.log("hello");
  });
  $(".item2").click(function() {
    $(".carousel").carousel(1);
    console.log("hello");
  });
  $(".item3").click(function() {
    $(".carousel").carousel(2);
  });
  $(".item4").click(function() {
    $(".carousel").carousel(3);
  });
  $(".item5").click(function() {
    $(".carousel").carousel(4);
  });
  $(".item6").click(function() {
    $(".carousel").carousel(5);
  });
  $(".nav-item").click(function() {
    $("#navbarNav").removeClass("show");
  });
  $(".carousel").swipe({
    swipe: function(
      _event,
      direction,
      _distance,
      _duration,
      _fingerCount,
      _fingerData
    ) {
      if (direction == "left") $(this).carousel("next");
      if (direction == "right") $(this).carousel("prev");
    },
    allowPageScroll: "vertical"
  });
  
  // Smooth scrolling

  var scrollLink = $(".scroll");

  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      900
    );
  });

// Preloader
  setTimeout(function() {
    $("#loader-wrapper").fadeToggle();
  }, 1500);
});
