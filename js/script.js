$(document).ready(function(){
  $(".start").click(function() {
    $(".main-screen").addClass("none");
    $(".character-selection").removeClass("none");
  })
})

$(document).ready(function(){
  $(".character-1").click(function() {
    $(".main-screen").addClass("none");
    $(".character-selection").addClass("none");
    $(".game-selection").removeClass("none");
  })
})

$(document).ready(function(){
  $(".character-2").click(function() {
    $(".main-screen").addClass("none");
    $(".character-selection").addClass("none");
    $(".game-selection").removeClass("none");
  })
})

$(document).ready(function(){
  $(".character-3").click(function() {
    $(".main-screen").addClass("none");
    $(".character-selection").addClass("none");
    $(".game-selection").removeClass("none");
  })
})

$(document).ready(function(){
  $("#fantazy").click(function() {
    $(".main-screen").addClass("none");
    $(".character-selection").addClass("none");
    $(".game-selection").addClass("none");
    $(".fantazy").removeClass("none");

  })
})

$( function() {
    $( ".ball-orange" ).draggable();
  } );

  $(document).ready(function(){
    $("#freedom").click(function() {
      $(".main-screen").addClass("none");
      $(".character-selection").addClass("none");
      $(".game-selection").addClass("none");
      $(".freedom").removeClass("none");

    })
  })

  $(document).ready(function(){
    $("#fixed-one").click(function() {
      $(".main-screen").addClass("none");
      $(".character-selection").addClass("none");
      $(".game-selection").removeClass("none");
      $(".freedom").addClass("none");
      $(".fantazy").addClass("none");
     })
  })

  $(document).ready(function(){
    $("#fixed-three").click(function() {
      $(".main-screen").addClass("none");
      $(".character-selection").addClass("none");
      $(".game-selection").removeClass("none");
      $(".freedom").addClass("none");
      $(".fantazy").addClass("none");
     })
  })


  $(document).ready(function(){
    $(".ball-orange").click(function() {
      $(this).addClass("none");
    })
  })

  $(document).ready(function(){
    $(".button1").click(function() {
      $(".ballbig1").removeClass("none");
      $(".ballbig2").addClass("none");
      $(".ballbig3").addClass("none");
      $(".ballbig4").addClass("none");
      $(".ballbig5").addClass("none");
    })
  })

  $(document).ready(function(){
    $(".button2").click(function() {
      $(".ballbig1").addClass("none");
      $(".ballbig2").removeClass("none");
      $(".ballbig3").addClass("none");
      $(".ballbig4").addClass("none");
      $(".ballbig5").addClass("none");
    })
  })


  $(document).ready(function(){
    $(".button3").click(function() {
      $(".ballbig1").addClass("none");
      $(".ballbig2").addClass("none");
      $(".ballbig3").removeClass("none");
      $(".ballbig4").addClass("none");
      $(".ballbig5").addClass("none");
    })
  })

  $(document).ready(function(){
    $(".button4").click(function() {
      $(".ballbig1").addClass("none");
      $(".ballbig2").addClass("none");
      $(".ballbig3").addClass("none");
      $(".ballbig4").removeClass("none");
      $(".ballbig5").addClass("none");
    })
  })

  $(document).ready(function(){
    $(".button5").click(function() {
      $(".ballbig1").addClass("none");
      $(".ballbig2").addClass("none");
      $(".ballbig3").addClass("none");
      $(".ballbig4").addClass("none");
      $(".ballbig5").removeClass("none");
    })
  })
