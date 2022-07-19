// jQuery - this selects the h1 element, and acts similarly to document.querySelector 
$("h1").css("color", "red");

// can check if the jQuery library is ready before carrying out a task with the below:
$(document).ready(function () {
    $("h1").css("color", "blue");
});

// if there is more than one element fitting the query, then jQuery acts like querySelectorAll

console.log($("button"));

// remember separation of concerns - add styles to a CSS class instead
$("h2").addClass("big-title");

// can also remove the classes
$("h2").removeClass("big-title");

// or add/remove multiple classes at the same time
$("h3").addClass("big-title margin-50");

// can check for a class too:
console.log($("h3").hasClass("margin-50"));

// editing text
$("h1").text("No");

// with multiple elements, the changes act on all elements
$("button").text("Don't touch me");

// innerHTML is shorter in jQuery
$("button").html("<b><em>Don't</em></b> touch me!!!");

// attributes - getting
console.log($("img").attr("src"));

// setting attributes - will occur if a second argument was given
$("a").attr("href", "https://example.com");

// event listeners - here a click event listener
$("h2").click(function () {
    confirm("Ok or not okay?") ? alert("You said ok") : alert("Aww, you said not ok");
});

// keypress event listener
$("input").keypress(function (event){
    // console.log(event.key);
    $("output").text($("input").val() + event.key);
});

// to add an event listener to the whole document, can either search for the body, or
$(document).dblclick(function (event){
    console.log("somewhere on screen was double clicked");
});

// adding html elements - can att them before or after a selected element

$("h1").before("<button>Another</button>");

// can append or prepend into HMTL elements

$("h1").append(" you <em>THOT</em>");

// or remove element(s) - if no specific element is chosen, all will be removed

$("button:last").remove();

// animations can be added - also note the use of the "on" notation

$("button:first").on("click", function(){
    $("h1").fadeOut();
});
$("button:eq(1)").on("click", function (){
    $("h1").fadeIn();
});
$("button:eq(2)").on("click", function (){
    $("h1").fadeToggle();
});
$("button:eq(3)").on("click", function (){
    $("h1").slideUp();
});
$("button:eq(4)").on("click", function (){
    $("h1").slideToggle();
});

// your own animations can be made - only to numeric-ish properties
$("img").on("click", function(){
    $("h3").animate({opacity: 0.5})
})

// can also chain methods together to happen sequentially
$("h4").on("click", function(){
    $("h5").fadeOut().fadeIn();
})