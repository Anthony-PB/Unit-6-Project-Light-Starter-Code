$(".start-button").click(function() {
	$(".start-button").fadeOut();
    $(".end-button").hide();
    $(".changing").attr("src", "https://i.ytimg.com/vi/Nc6bC5sgZFk/hqdefault.jpg");
    $(".text_intro").text("Choose a strategy!");
});

$(".end-button").dblclick(function() {
	$(".start-button").hide();
    $(".end-button").fadeOut();
    $(".changing").attr("src", "https://media.gq.com/photos/5bfd90103b35e71fc3e6cf3b/3:4/w_641,h_855,c_limit/Stephen-Hillenburg-creator-of-Spongebob-died-gq.jpg");
	$(".text_intro").text("You made the 5 year-old cry!");
    $(".earthquake").fadeIn();
    
});
$(".earthquake").click(function() {
	$(".changing").effect("shake");
});

$(".no-button").click(function() {


});