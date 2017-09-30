$(document).ready( function(){
	$log = $('#dataBar');
	$log.append('hiya!');
	
	var $linkHover = $('a:hover, a:visited');
	var $firstLink = $linkHover.first();
	$firstLink.css('background-color', '#FF0');
	//color = $linkHover.first().css('color');
	//$log.append( typeof($linkHover.first().css('background-color')) );
	$log.click( function(){
		color = $(this).css('color');
		$(this).append(typeof($firstLink.color()));
	});
});