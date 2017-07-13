function thouPlace(userInput){
  var output = "";
  if(userInput === "1"){
    output = "M";
  }else if(userInput === "2"){
    output = "MM";
  }else if(userInput === "3"){
    output = "MMM";
  }else{
    alert("too much");
  }
  return output;
}
function hunPlace(userInput){
  var output = "";
  if(userInput === "1"){
    output = "C";
  }else if(userInput === "2"){
    output = "CC";
  }else if(userInput === "3"){
    output = "CCC";
  }else if(userInput === "4"){
    output = "CD";
  }else if(userInput === "5"){
    output = "D";
  }else if(userInput === "6"){
    output = "DC";
  }else if(userInput === "7"){
    output = "DCC";
  }else if(userInput === "8"){
    output = "DCCC";
  }else if(userInput === "9"){
    output = "CM";
  }else{
    output = "";
  }
  return output;
}
function tenPlace(userInput){
  var output = "";
  if(userInput === "1"){
    output = "X";
  }else if(userInput === "2"){
    output = "XX";
  }else if(userInput === "3"){
    output = "XXX";
  }else if(userInput === "4"){
    output = "XL";
  }else if(userInput === "5"){
    output = "L";
  }else if(userInput === "6"){
    output = "LX";
  }else if(userInput === "7"){
    output = "LXX";
  }else if(userInput === "8"){
    output = "LXXX";
  }else if(userInput === "9"){
    output = "XC";
  }else{
    output = "";
  }
  return output;
}

function onePlace(userInput){
  var output = "";
  if(userInput === "1"){
    output = "I";
  }else if(userInput === "2"){
    output = "II";
  }else if(userInput === "3"){
    output = "III";
  }else if(userInput === "4"){
    output = "IV";
  }else if(userInput === "5"){
    output = "V";
  }else if(userInput === "6"){
    output = "VI";
  }else if(userInput === "7"){
    output = "VII";
  }else if(userInput === "8"){
    output = "VIII";
  }else if(userInput === "9"){
    output = "IX";
  }else{
    output = "";
  }
  return output;
}

function toRoman(userInput){
  var length = userInput.length;
  var output = "";
  if((userInput<= 0) || (userInput >= 4000) || isNaN(userInput)){
    alert("Invalid number, try again");
  }

  if(length === 1){
    output = onePlace(userInput);
  }else if(length === 2){
    output = tenPlace(userInput[0]) + onePlace(userInput[1]);
  }else if(length === 3){
    output = hunPlace(userInput[0]) + tenPlace(userInput[1]) + onePlace(userInput[2]);
  }else if(length === 4){
    output = thouPlace(userInput[0]) + hunPlace(userInput[1]) + tenPlace(userInput[2]) + onePlace(userInput[3]);
  }else{
    alert("too much");
  }
  return output;
}



$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("input#decNum").val();
    var output = toRoman(input);
    $("#result").text(output);
  });
});
