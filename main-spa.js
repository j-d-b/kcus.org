// Jacob Brady
// 2018 KCUS Inc.

var mainPageHashes = ['#home', '#projects', '#staff', '#contact'];
var subPageHashes = ['#staff-ammar', '#staff-michelle', '#staff-firas', '#staff-emily', '#staff-sapreen', '#staff-jacob' ];
var allPageHashes = mainPageHashes.concat(subPageHashes);
var currentHash = '#home';
var defaultHash = '#home'; // could link to page not found, etc.

$(document).ready(function(){
  currentHash = checkHash( $(location).attr('hash') );
  displayContent(currentHash);
  setHighlight(currentHash);

  $(window).on('hashchange', function() {
    var newHash = checkHash( $(location).attr('hash') );
    switchHighlight(newHash);
    displayContent(newHash);
    currentHash = newHash;
  });

});

// gives the pathname partial given a hash
// ex: given '#contact' returns '_contact.html'
// ex: given '#staff-jacob' returns staff/_jacob.html'
// only works for single nested pages
function hashToPath(hash) {
  var parts = hash.substring(1).split('-');
  return parts.length > 1 ? (parts[0] + '/_' + parts[1] + '.html') : ('_' + parts[0] + '.html');
}

// ensures hash is in allPageHashes
function checkHash(hash) {
  console.log(hash);
  var isValid = $.inArray(hash, allPageHashes) != -1;
  if (isValid) {
    return hash;
  }
  else {
    window.location.hash = defaultHash;
    return defaultHash;
  }
}

// determine which content to display on page load by url hash
function displayContent(hash) {
  var path = hashToPath(hash);
  $('#main-content').load(path);

  switch (hash) {
    case '#home':
      $.getScript('home.js');
      break;
    case '#projects':
      $.getScript('projects.js');
      break;
    case '#staff':
      $.getScript('staff.js');
      break;
  }
}

// changes the menu highlight to match the given hash
function switchHighlight(hash) {
  if (hash != currentHash) {
    setHighlight(hash);
  }
}

// highlights only navbar item corresponding to the given hash
function setHighlight(hash) {
  var mainHash = hash.split('-')[0];
  $('.nav-title').removeClass('nav-active');
  $('a[href="' + mainHash + '"] .nav-title').addClass('nav-active');
}
