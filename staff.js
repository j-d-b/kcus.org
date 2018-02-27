$(document).ready(function() {
  var context = {
    staff: [
      { "staff-name-full": "Ammar Kanaan", "staff-name-first": "ammar", "staff-title": "President" },
      { "staff-name-full": "Michelle Boucher", "staff-name-first": "michelle", "staff-title": "Managing Director" },
      { "staff-name-full": "Firas Said", "staff-name-first": "firas", "staff-title": "Lead Systems Engineer" },
      { "staff-name-full": "Emily Wright", "staff-name-first": "emily", "staff-title": "Systems Engineer" },
      { "staff-name-full": "Sapreen Abbass", "staff-name-first": "sapreen", "staff-title": "Systems Engineer" },
      { "staff-name-full": "Jacob Brady", "staff-name-first": "jacob",   "staff-title": "Software Developer" }
    ]
  };

  var templateScript = Handlebars.templates.staff(context);

  $('#staff-placeholder').html(templateScript);

  $('.staff-select').on('click', function() {
    $('.staff-item').toggleClass('col-md-6 col-lg-4 col-lg-6');
    $('#staff-thumbnails').toggleClass('col-12 col-sm-8');
    $('#staff-description').toggleClass('col-4 d-none');

    var name = $(this).attr('data-target');
    $('#staff-description').load('staff/_' + name + '.html');
  });



});
