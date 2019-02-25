$(document).ready(function() {
  var answer1 ;
  var answer2 ;
  var answer3 ;
  var answer4 ;
  var answer5 ;
  var answers = [] ;
  /*This function collects the checked radio button*/
  $("#submit").on('click',function() {
    answer1 = $("input[name='quiz1']:checked").val();
    answer2 = $("input[name='quiz2']:checked").val();
    answer3 = $("input[name='quiz3']:checked").val();
    answer4 = $("input[name='quiz4']:checked").val();
    answer5 = $("input[name='quiz5']:checked").val();
    answers = [answer1, answer2, answer3, answer4, answer5]
    var majibu = ["library", "javascript", "yes", "yes", "high"];
    var score = [] ;
    /*The correct function is checked and if correct its pushed to variable score and counted as a number*/
    if (answer1 === "library") {
      score.push(answer1)
    }
    if (answer2 === "javascript") {
      score.push(answer2)
    }
    if (answer3 === "yes") {
      score.push(answer3)
    }
    if (answer4 === "yes") {
      score.push(answer4)
    }
    if (answer5 === "high") {
      score.push(answer5)
    }
    /*This last function calculates the score output*/
    var result = score.length;
    if (result == 1) {
      alert( 'Your score is 20%')
    } else if (result == 2) {
      alert('Your score is 40%')
    } else if (result == 3) {
      alert('Your score is 60%')
    } else if (result == 4) {
      alert('Your score is 80%')
    } else {
      alert('Your score is 100%')
    }
    event.preventDefault();
 });
});
