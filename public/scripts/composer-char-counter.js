// Characters Counter //

// To ensure DOM has loaded

// $(document).ready(function() {
//   // --- our code goes here ---
//   console.log('ready');
// });


$(document).ready(function() {
  const maxCharac = 140;
  const counter = $('#tweet-text').next().children(".counter");

  $('#tweet-text').on('input', function(event) {
    const characLeft = maxCharac - event.target.textLength;
    if (characLeft >= 0) {
      counter.html(characLeft).css("color", "#545149");
    } else {
      counter.html(characLeft).css("color", "red");
    }
  });
});

//keyup can work too