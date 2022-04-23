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
//Senha Invalida or Acesso Permitido
// 2200 Senha Invalida / 2002 Acesso Permitido
function question_02() {
  const getPassword = parseInt(document.getElementById( "password").value);
  // const getTotal_2 = document.getElementById( "total_2" ).innerHTML = getPassword;
  const passwordValid = 2002

 if ( getPassword == passwordValid ) {
  const getTotal_2 = document.getElementById( "total_2" ).innerHTML = getPassword;
 } else {
  const getTotal_2 = document.getElementById( "total_2" ).innerHTML = "access denied!";
 }

}
//intervalos ([0,25], (25,50], (50,75], (75,100]) 

function question_03(){

  const number = parseInt( document.getElementById("number").value);
  
  let numberInteval;

  if ( number > 0 && number < 25 ) {
    numberInteval = "[ 0...25 ]";
  } else if ( number >= 25 && number < 50) {
    numberInteval = "[ 25...50 ]";
  } else if ( number >= 50 && number < 75) {
    numberInteval = "[ 50...75 ]";
  } else if (number >=75 && number <=100 ) {
    numberInteval = "[ 75...100 ]";
  } else {
    numberInteval = "fora do intervalo";
  }
  console.log( typeof numberInteval );
  document.getElementById("result").innerHTML = numberInteval;
  

}
