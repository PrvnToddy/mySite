//Remove #tag in URL
$(window).on("hashchange", function (e) {
  history.replaceState("", document.title, e.originalEvent.oldURL);
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() <= 100) { // this refers to window
//     console.log("You've scrolled 100 pixels.");
//     // $(".up").css("display", "fixed");
//     $("main").removeClass("up");

//     // $(".content-wrapper").addClass("up");
//   } else {
//     console.log("You've scrolled > 100 pixels.");
//     // $(".content-wrapper").removeClass("up");
//     $("main").addClass("up");

//   }
// });



$(window).scroll(function () {
  if ($(window).scrollTop() > 300) { // this refers to window
    // console.log("You've scrolled 100 pixels.");
    // $(".up").css("display", "fixed");
    // $(".button").css("transition-duration", "3s");

    $(".button").addClass("up").animate({
      transition: "all 3s"
    }, 3000);

    // $(".content-wrapper").addClass("up");
  } else {
    // console.log("You've scrolled > 100 pixels.");
    // $(".content-wrapper").removeClass("up");
    // $(".button").css("transition-duration", "3s");

    $(".button").removeClass("up").animate({
      transition: "all 3s"
    }, 3000);

  }
});

//ProgressBar in Header
$(document).ready(function () {
  $(window).scroll(function () {
    var cont_height = $(".content-wrapper").outerHeight();
    var scroll_top = $(window).scrollTop();
    var doc_height = $(window).outerHeight();
    var progress = (scroll_top / (cont_height - doc_height)) * 100;
    //now to set range of progress value between 0 and 100 we will define a function
    function round(val, min, max) {
      return val > max ? max : val < min ? min : val;
    }
    var final_val = round(progress, 0, 100);
    $(".navigation__prog-bar").attr("value", final_val);
  });
});

$("body").scroll({
  target: "mainnav",
  offset: 50
});

// Basice Code keep it
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;

    $target = $(target);

    $("html, body")
      // .stop()
      .animate({
          scrollTop: $target.offset().top + 2
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $("#mainnav a").each(function () {
      var currLink = $(this);

      var refElement = $(currLink.attr("href"));
      if (!refElement.length) return;
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("#mainnav ul li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  //smoothscroll
});

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') ==
//         this.pathname.replace(/^\//, '') &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate(
//           {
//             scrollTop: target.offset().top
//           }
//           // ,
//           // 1000,
//           // function() {
//           //   // Callback after animation
//           //   // Must change focus!
//           //   var $target = $(target);
//           //   $target.focus();
//           //   if ($target.is(':focus')) {
//           //     // Checking if the target was focused
//           //     return false;
//           //   } else {
//           //     // $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//           //     $target.focus(); // Set focus again
//           //   }
//           // }
//         );
//       }
//     }
//   });

$(".counter").counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 100,
  formatter: function (n) {
    return n.replace(/,/g, ".");
  }
});

$(document).ready(function () {
  Filterizr.installAsJQueryPlugin($);
  var filterizr = $(".filter-container").filterizr({
    animationDuration: 0.5, //in seconds
    delay: 10,
    delayMode: "alternate",
    easing: "ease-out",
    filter: "all",
    filterOutCss: {
      //Filtering out animation
      opacity: 0,
      transform: "scale(.5)"
    },
    filterInCss: {
      //Filtering in animation
      opacity: 1,
      transform: "scale(1)"
    },
    layout: "sameSize",
    selector: ".filtr-container"
    // setupControls: true
  });
  $(".filterList").on("click", function () {
    $(".filterList").removeClass("dot");
    $(this).addClass("dot");
  });
});
$(".close").on("click", function () {
  $("#navi-toggle").prop("checked", false);
});

// $('form').on('submit', (e) => {
//   e.preventDefault();

//   const name = $('#name').val();
//   const email = $('#email').val();
//   const number = $('#number').val();
//   const text = $('#text').val();

//   const data = {
//     name,
//     email,
//     number,
//     text
//   };
//   $.post('/email', data, function () {
//     console.log('Server recived our data');
//   })
// })