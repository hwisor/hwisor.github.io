$(document).ready(function(){

	$('.item').click(function(){
		$(this).toggleClass('active');
	});

	$("#showhide").click(function(){
		
		$('.item').toggleClass('active');
	});

});