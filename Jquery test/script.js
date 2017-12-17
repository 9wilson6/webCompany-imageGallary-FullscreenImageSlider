$(document).ready( function() {

$('p').hide();
 $('h1').click(
 function() {
    // $(this).next().css("background-color","red");
    $(this).next().slideToggle(1000);
 });

 $('form').hide();
 $('#log').click(function() {
    $("#register > form").hide(2000);
$("#login > form").slideToggle(2000);

 });

 $('#reg').click(function() {
    $("#login > form").hide(2000);
    $("#register > form").slideToggle(2000);
    
     });
});