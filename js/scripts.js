function toRoman(userInput){
  var output = userInput.length;
  if((userInput<= 0) || (userInput >= 4000)){
    alert("Invalid number, try again");
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
