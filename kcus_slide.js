
function runProj(){

}

function getHeight($current){
	var boxHeight = $current.innerHeight();
	var showHeight = $current.find('h3').outerHeight() + $current.find('h4').outerHeight();
	console.log("height og the h2's is")
	console.log(showHeight)
	console.log("boxHeight is " + boxHeight)
	var show = boxHeight - showHeight
	var slide = $current.find('.full-caption').height() - showHeight
	console.log("show is " + show)
	console.log("slide is " + slide)
	$current.find('.full-caption').css('top', show)

	$current.hover(
		function(){
			console.log("slide now is " + slide)
			console.log("the hover thing works")
			$current.find('.full-caption').css('-moz-transform', 'translateY(-' + slide + 'px)')
			$current.find('.full-caption').css('-o-transform', 'translateY(-' + slide + 'px)')
			$current.find('.full-caption').css('-webkit-transform', 'translateY(-' + slide + 'px)')
			$current.find('.full-caption').css('-transform', 'translateY(-' + slide + 'px)')
	}, function(){
			$current.find('.full-caption').css('-moz-transform', 'translateY(' + 0 + 'px)')
			$current.find('.full-caption').css('-o-transform', 'translateY(' + 0 + 'px)')
			$current.find('.full-caption').css('-webkit-transform', 'translateY(' + 0 + 'px)')
			$current.find('.full-caption').css('-transform', 'translateY(' + 0 + 'px)')
			$current.find('.full-caption').css('top', show)
	});
	$('.temp_hide').css('visibility', 'visible')
	console.log("the hover thing ended")
}


$(window).load(function(){
	$('div.box').each(function(){
		getHeight($(this));
	})
});

 $(window).resize(function(){
	$('div.box').each(function(){
		getHeight($(this));
	})
});

// $(document).ready(function(){
// 	$("div.box").each(function(){
// 		console.log("in the function")
//     	var height = $("div.projname").offsetHeight();
//     	console.log("height og the h2's is")
// 		console.log(height)
//         // if (this.hasClass("slide-hide"))
// 	            // $(".expandableArea").slideDownTransition();
// 	        // else
// 	            // $(".expandableArea").slideUpTransition();
// 	    })
// 	    // 	if ($(".expandableArea").hasClass("slide-hide"))
// 	    //         $(".expandableArea").removeClass("slide-hide");
// 	    // })
// });