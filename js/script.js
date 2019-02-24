$(document).ready(function() {
  var answers ;
  $("#submit").on('click',function() {
    answers = $("input[name='quiz1']:checked").val();
      alert (answers)
 });
});
