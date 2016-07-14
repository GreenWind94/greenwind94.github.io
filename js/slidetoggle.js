$(window).load(function() {
		$(".se-pre-con").animate({
				left: 1500
			}, 2000);
		});
function opencredit(){
var creditfile="credits.htm"

if (document.all)
creditwindow=window.open(creditfile,"","width=445,height=400")
else
creditwindow=window.open(creditfile,"","width=445,height=400,scrollbars")
}

$(document).ready(function() {
		$(".credit").click(function() {
			javascript:opencredit();
			$(".flipcre").slideToggle("slow");
		});
	});

$(document).ready(function(){
	$(".tweet").click(function(){
		$(".flip").toggle();
	});
});