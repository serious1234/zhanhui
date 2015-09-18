

$(document).ready(function() {

	$(".m-menu").click(function(){
		$("#container-all").toggleClass("active");
		$(".m-menu").toggleClass("active");
	});
	$(".mobile-menu").css("height",$(document).height()-50+"px");
	$(".mobile-menu").css('left','-200px');
	$(".mobile-menu-bg").css('left', '-200px');

	var isExpanded = false;
	$(".m-menu").click(function () {
	    if (!isExpanded) {
	        $('.mobile-menu').animate({ left: '0' }, { duration: 500, queue: false });
	        $('.mobile-menu-bg').animate({ left: '0' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-left': '160px' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-right': '-160px' }, { duration: 500, queue: false });
	    }
	    else {
	        $('.mobile-menu-bg').animate({ left: '-200' }, { duration: 500, queue: false });
	        $('.mobile-menu').animate({ left: '-200' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-left': '0' }, { duration: 500, queue: false });
	        $('#container-all').animate({ 'margin-right': '0' }, { duration: 500, queue: false });
	    }
	    isExpanded = !isExpanded;
	});
	$(".mobile-menu ul li").click( function () {
		$(".mobile-menu ul li ul").hide();
		$(this).find("ul").show();
	});
		$("#ul1 li a").click( function () {
			$(this).nextAll().show();
		});
		$("#ul1 li h5").click( function () {
			$(this).hide();
			$(this).prev().hide();
		});
		$("#ul2 li a").click( function () {
			$(this).nextAll().show();
		});
		$("#ul2 li h5").click( function () {
			$(this).hide();
			$(this).prev().hide();
		});
		$("#listBox ul li").click( function () {
			$("#listBox ul li ol").hide();
			$(this).find("ol").show();
		});
	$(".zhuyineirong h5").click( function () {
		$(".zhuyineirong p").hide();
		$(".zhuyineirong h5").hide();
		$(".zhuyineirong h4").show();
		//$(this).find("p").hide();
	});
	$(".zhuyineirong h4").click( function () {
		$(".zhuyineirong p").show();
		$(".zhuyineirong h5").show();
		$(".zhuyineirong h4").hide();
		//$(this).find("p").hide();
	});
});
