boxArray = ["red", "blue"]

var box1 = false;




$( "#box1" ).click(function() {

  $("#box1").css("background-color", "red");
  box1 = true;
  boxArray.push("red");
  console.log(boxArray);
  setTimeout(function(){
    $("#box1").css("background-color", "blue");
    }, 1000);
});



$( "#box2" ).click(function() {

  $("#box2").css("background-color", "yellow");
  box1 = true;
  boxArray.push("yellow");
  console.log(boxArray);
  setTimeout(function(){
    $("#box2").css("background-color", "blue");
    }, 1000);
});



$( "#box3" ).click(function() {

  $("#box3").css("background-color", "yellow");
  box1 = true;
  boxArray.push("yellow");
  console.log(boxArray);
  setTimeout(function(){
    $("#box3").css("background-color", "blue");
    }, 1000);
});




$( "#box4" ).click(function() {

  $("#box4").css("background-color", "red");
  box1 = true;
  boxArray.push("red");
  console.log(boxArray);
  setTimeout(function(){
    $("#box4").css("background-color", "blue");
    }, 1000);
});


// setTimeout(function(){
  if (boxArray[0] === boxArray[1]) {
    alert("you win")
  }

  // ; }, 3000);
