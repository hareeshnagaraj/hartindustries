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
});