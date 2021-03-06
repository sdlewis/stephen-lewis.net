/*Manage windows in a scroll down menu
typesets mathjax dynamically
Requires Mathjax to be loaded

time: 1000
*/

$(document).ready(function(){

	$url = window.location;
	//$('#dataBar').text($url);

	$body = $('body');
	$mainDiv = $('.maindiv');
	$menuBar = $('.menuBar');
	$menuButton = $('.menuBar .menuButton');
    $menuButton.click(function(){
		
		$thisScroll = $(this).parent();
		$thisBar = $thisScroll.parent();
		$thisHeader = $thisBar.parent();
		$thisMenu = $thisHeader.parent();
		$thisContent = $thisMenu.children('.menuContent');
		$backUpButtons = $('.backUp .button');
		$thisMenuItems = $thisContent.children('.menuItem');
		
		if($thisMenu.is('.scrolling')) {/*if scrolling, ignore click*/
			return;
		} else {
			$thisMenu.addClass('scrolling');
		}
		
		$i = $('.menuButton').index(this);
		$index = ':nth-child('+String($i + 1)+')';
		if($thisMenu.is('.open')){
			$iOpen = $thisScroll.children('.open').index();
			$indexOpen = ':nth-child('+String($iOpen + 1)+')';
			if ($i == $iOpen) {
				$thisContent.children($index).slideUp(1000, function(){
					$thisMenu.removeClass('scrolling');
				});
				$thisMenu.removeClass('open');
				$(this).removeClass('open');
				$backUpButtons.animate({opacity:0},1000);
			} else {
				$thisContent.children($indexOpen).slideUp(1000, function(){
					$thisContent.children($index).slideDown(1000, function(){
						$thisMenu.removeClass('scrolling');
						MathJax.Hub.Queue(["Typeset",MathJax.Hub, this]);
					});
				});
				$thisScroll.children().removeClass('open');
				$(this).addClass('open')
			}
			
			/*for testing purposes*/
			$("#dataBar").text(String($i) +':i,iopen:'+ String($iOpen));
		} else {/*the menu is closed*/
			$thisContent.children($index).slideDown(1000, function(){
				$thisMenu.removeClass('scrolling');
				MathJax.Hub.Queue(["Typeset",MathJax.Hub, this]);
			});
			$thisMenu.addClass('open');
			$(this).addClass('open');
			$("#dataBar").text(String($i) + 'hello');
			$backUpButtons.animate({opacity:1},1000);
		}
	});
	
	$backUp = $('.backUp');
	$toTop = $('.backUp #close');
	
	$toTop.click(function(){
		//$bottomLog = $('#bottomLog');
		$thisMenu = $(this).parent().parent().parent();
		$thisContent = $thisMenu.children('.menuContent');
		$thisHeader = $thisMenu.children('.menuHeader');
		$thisBar = $thisHeader.children('.menuBar');
		$thisScroll = $thisBar.children('.menuScroll');
		$iOpen = $thisScroll.children('.open').index();
		$indexOpen = ':nth-child('+String($iOpen + 1)+')';
		$thisContent.children($indexOpen).slideUp(1000);
		$thisScroll.children($indexOpen).removeClass('open');
		$thisMenu.removeClass('open');
		$(this).parent().children('.button').animate({opacity:0},1000);
		$(this).parent().children('a').children('.button').animate({opacity:0},1000);
		$("#dataBar").append('iopen:'+ String($iOpen));
	});
});