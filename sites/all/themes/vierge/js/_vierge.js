/* Implement custom javascript here */
var $ = jQuery;
(function () {


}());


$(document).ready(function(){

	// $( "#quicktabs-impacto_it .item-list ul.quicktabs-tabs" ).prepend( "<h2>IMPACTO IT</h2>" );

	// $(".close-button-popup").click(function() {
	//   $(".popup").fadeOut("slow");
	//   $('.video-youtube')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	// });

	// $(".ver-video").click(function() {
	//   $(".popup").fadeIn("slow");
	// });



});



$(window).scroll(function() {    
    if ($(window).scrollTop() > 10) {
			$("header").addClass("scrollHeader");
    } else {
			$("header").removeClass("scrollHeader");

    }
});