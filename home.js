$(document).ready(function() {
  var context = {
    infos: [
      { 'hash': '#projects-gotime', 'img-name': 'RTTM', 'img-src': 'images/home_rttm.png', 'description': 'KCUS implemented and maintains <a class="font-weight-medium" href="http://www.massdotgotime.com" target="_blank">GoTime</a>, the Massachusetts Statewide <a class="font-weight-medium" href="projects/gotime.html">Real Time Trafffic Management (RTTM) </a>System.' },
      { 'hash': '#contact', 'img-name': 'Bulfinch Square', 'img-src': 'images/bulfinch_square.jpg', 'description': 'KCUS is located in Cambridge, Massachusetts at <a class="font-weight-medium" href="https://www.google.com/maps/place/Kanaan+Consulting,+Inc.+US/@42.3663545,-71.0826626,15z/data=!4m5!3m4!1s0x89e370bbf92c8791:0x49e5de4aae3787d6!8m2!3d42.3699335!4d-71.0797014" target="_blank">43 Thorndike Street</a> in the historic Bulfinch Square.' },
      { 'hash': '#projects-itms', 'img-name': 'ITMS', 'img-src': 'images/projects/hoc.jpeg', 'description': 'KCUS is working with the Massachusetts Department of Transportation to design and implement a new <a href="/projects/itms.html" class="font-weight-medium">Integrated Transportation Management System (ITMS)</a>.' }
    ]
  };

  var templateScript = Handlebars.templates.home(context);

  $('#home-info').html(templateScript);
});
