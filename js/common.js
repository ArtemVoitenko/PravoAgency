$(function(){

	var $menu = $('nav');
	var $interestLink = $('.select a');
	var $interestList = $('.check');
	var $myFlag = false;
	var $showMenu = $('.showMenu');
	$interestLink.click(function(e){
		if($myFlag) {
			
		 		$(this).css("backgroundImage", "url(img/angleDown.png)");
		 		$myFlag = false;
		 		}
		 	else {
		 		$(this).css("backgroundImage", "url(img/angleUp.png)");
		 		$myFlag = true;
		 	}
		e.preventDefault();
		$interestList.slideToggle();
		$('html, body').animate({
      scrollTop: $interestLink.offset().top
    }, 500);
	});
	$showMenu.click(function (e) {
		e.preventDefault();
		$menu.slideToggle();

	})
    var $menuLink = $(".mainMenu a");
    $menuLink.on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
	
});