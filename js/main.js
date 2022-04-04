const btn = document.getElementById( "button");

// score_1 peso = 2, score_2 peso = 3, score_3 peso = 5
// weighted average
// 5.0,6.0,7.0 = 6.3
//10+18+35 = 63 / 18 = 3.5
function question_01(){
  const score_1 = parseFloat(document.getElementById( "score_1" ).value);
  const score_2 = parseFloat(document.getElementById( "score_2" ).value);
  const score_3 = parseFloat(document.getElementById( "score_3" ).value); 

  const sumScore = score_1 + score_2 + score_3;
  const scorePod = (score_1*2) + (score_2*3) + (score_3*5);

  const averange = (scorePod /  sumScore).toFixed(1);

  const get_total_1 = document.getElementById( "total_1" ).innerHTML = averange;

  return console.log()

}

