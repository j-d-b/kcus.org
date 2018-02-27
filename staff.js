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
});
