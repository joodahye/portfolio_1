$(document).ready(function(){
	
	//스킬마우스오버 시 설명나옴
	$(".hcjpa a").mouseenter(function(){
			let i = $(this).index();
			$("#text11 p").hide();
			$("#text11 p").eq(i).show();
	});
	
	
	
});///////end