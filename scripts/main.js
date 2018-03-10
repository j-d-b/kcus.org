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
// ex: given '#contact' returns '/views/_contact.html'
// ex: given '#staff-jacob' returns /views/staff/_jacob.html'
// only works for singly nested subpages
function hashToPath(hash) {
  var parts = hash.substring(1).split('-');
  return '/views/' + (parts.length > 1 ? ( parts[0] + '/_' + parts[1] + '.html') : ('_' + parts[0] + '.html'));
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
  $('#main-content').load(path, function() {
    switch (hash) {
      case '#home':
        loadHome();
        break;
      case '#projects':
        loadProj();
        break;
      case '#staff':
        loadStaff();
        break;
    }
  });
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



// -------- PAGE LOADING STUFF BELOW --------
// put this into indivdual file w/ webpack or something...
// rename this page switching file to index.js
// these set up the handlers for the page and builds the html from template w/ json data

function loadProj() {
  $.getJSON('/template-data/projects.json', function(data) {
    $('#current-projects').html( Handlebars.templates.projects(data.projCurrent) );
    $('#software-systems').html( Handlebars.templates.projects(data.projSoftSys) );
    $('#transportation-planning').html( Handlebars.templates.projects(data.projPlanning) );

    $('.proj-page-header').on('click', function(e) { // TODO
      console.log('here');
      $(this).find('svg').toggleClass('fa-caret-right fa-caret-down py-2 px-1');
    });
  });
}

function loadHome() {
  $.getJSON('/template-data/home.json', function(context) {
    var templateScr = Handlebars.templates.home(context);
    $('#home-info').html(templateScr);
  });
}

function loadStaff() {
  $.getJSON('/template-data/staff.json', function(context) {
    var templateScr = Handlebars.templates.staff(context);
    $('#staff-placeholder').html(templateScr);

    $('.staff-select').on('click', function() { // TODO
      $('.staff-item').toggleClass('col-md-6 col-lg-4 col-lg-6');
      $('#staff-thumbnails').toggleClass('col-12 col-sm-8');
      $('#staff-description').toggleClass('col-4 d-none');

      var name = $(this).attr('data-target');
      $('#staff-description').load('staff/_' + name + '.html');
    });
  });
}
