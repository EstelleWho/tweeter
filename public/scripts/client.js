/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
// TWEET
$(document).ready(function() {
  const createTweetElement = function(tweet) {
  let $tweet = $(`
  <article class="tweet">
    <header>
      <div class="user-info">
        <img class="avatar" src="${tweet.user.avatars}" alt="User Avatar">
        <span class="user-name">${tweet.user.name}</span>
      </div>
      <span class="user-handle">${tweet.user.handle}</span>
    </header>
    <div class="tweet-content">
      ${tweet.content.text}
    </div>
    <footer>
      <span class="tweet-timestamp">${timeago.format(tweet.created_at)}</span>
      <div class="actions">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
    `);
  return $tweet;
  };

// RENDERING TWEETS
const renderTweets = function(tweets) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const $tweetsContainer = $('#tweets-container'); // this is jQuery
$tweetsContainer.empty(); 
// the loop
for (const tweet of tweets) {
  const $tweet = createTweetElement(tweet);
  $tweetsContainer.append($tweet);
  };
};

// SUBMISSION
$('form').on('submit', function(event) {
  event.preventDefault(); //handler function to prevent default from submission
  const data = $(this).serialize();
  console.log("data:", data);

  $.ajax({
    type: 'POST',
    url: "http://localhost:8080/tweets",
    data,
    success: function(res) {
      console.log('Success');
      console.log(res);
    },
    error: function(error) {
      console.log('Failed')
      console.log(error);
      },
    });
  $('#tweet-text').val('');
  $('.counter').val('140');
  });

// LOAD TWEETS





});