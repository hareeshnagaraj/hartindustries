function scroll(inputstring){
var offset = $(this).offset();
$('html, body').animate({scrollTop: $(inputstring).offset().top}, 1000);
}
$(document).ready(function(){
	//Toggle for mobile modal
	var mobileToggle = 0;
	$("#hamburger").click(function(){
		if(mobileToggle == 0){
			$(".mobileModal").fadeIn();
			mobileToggle = 1;
		}
		else{
			$(".mobileModal").fadeOut();
			mobileToggle = 0;
		}
	});
	$("#closeMobileModal").click(function(){
		$(".mobileModal").fadeOut();
		mobileToggle = 0;
	});

	//toggle for solutions page, product solutions
	$("#productSolutions").click(function(){
		var containerheight = $(".solutions_productsContainer").height();
		$(".solutions_marketsContainer").animate({"height":"0px"},300);
		if(containerheight == 0){
			$(".solutions_productsContainer").animate({"height":"450px"},300);
			$(".hartfooter").css({"position":"relative"});
			scroll("#productsContainer");
		}
		else{
			$(".hartfooter").css({"position":"absolute"});
			$(".solutions_productsContainer").animate({"height":"0px"},{duration:300,complete:function(){
				$(".hartfooter").css({"position":"absolute"});
			}});
			
		}

	});
	//container on the solutions page with the markets being served
	$("#marketsServed").click(function(){
		var containerheight2 = $(".solutions_marketsContainer").height();
		$(".solutions_productsContainer").animate({"height":"0px"},300);
		if(containerheight2 == 0){
			$(".hartfooter").css({"position":"relative"});
			$(".solutions_marketsContainer").animate({"height":"450px"},300);
			$(".solutions_marketsContainer").css({"overflow":"visible"});
			scroll("#marketsContainer");
		}
		else{
			$(".hartfooter").css({"position":"absolute"});
			$(".solutions_marketsContainer").animate({"height":"0px","overflow":"visible"},300);
		}
	});
});