
var button = $('#myButton').click(function(){
     var listItemAdded = document.getElementById("userInput")

     console.log( listItemAdded.value);
     
     
     $('ul').append("<li>" + listItemAdded.value + "</li>");
    
});