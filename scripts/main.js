// Jacob Brady
// 2018 KCUS Inc.

// globals
var mainPageHashes = ['#home', '#projects', '#staff', '#contact'];
var staffPageHashes = ['#staff-ammar', '#staff-michelle', '#staff-firas', '#staff-emily', '#staff-sapreen', '#staff-jacob'];
var allPageHashes = mainPageHashes.concat(staffPageHashes);
var currentHash = '#home';
var defaultHash = '#home'; // could link to page not found, etc.

$(document).ready(function(){
  // setStaffHashes();

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

// fills out global staffPageHashes using staff.json
function setStaffHashes() {
  $.getJSON('/template-data/staff.json', function(data) {
    data.staff.forEach(function(obj) {
      staffPageHashes.push(obj.hash);
    });
  });
}

// gives the pathname partial given a hash,
// assumes pages are in 'views/'
function hashToPath(hash) {
  return '/views/' + '_' + hash.substring(1) + '.html';
}

// ensures hash is in allPageHashes
function checkHash(hash) {
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
  if (staffPageHashes.includes(hash)) {
    $.getJSON('/template-data/staff.json', function(data) { // get rid of all these ajax!!
      loadPerson(data.staff[staffPageHashes.indexOf(hash)]);
    });
    return;
  }
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
// put this into indivdual file or something...
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
  $.getJSON('/template-data/home.json', function(data) {
    var templateScr = Handlebars.templates.home(data);
    $('#hbs-home').html(templateScr);
  });
}

function loadStaff() {
  $.getJSON('/template-data/staff.json', function(data) {
    var staffTemplate = Handlebars.templates.staff(data);
    $('#hbs-staff').html(staffTemplate);
  });
}

function loadPerson(person) {
  var personTemplate = Handlebars.templates.person(person);
  $('#main-content').html(personTemplate);
}
