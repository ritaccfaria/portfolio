// JavaScript Document

jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 10;
    mouseY = e.pageY - 10; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/1);
    yp += ((mouseY - yp)/1);
    $(".circle").css({left: xp +'px', top: yp +'px'});
  }, 0);

});


// MUDAR CURSOR ON HOVER
$('.column, .column-overlay, nav, #close, #close2').hover(function() {
    $(this).css('cursor','pointer');
	$(".circle").toggleClass("circle-hover");
});

	


// FECHAR OVERLAYS
$("#close").on("click", function() {
 
	$(".overlay").toggleClass("overlay-clicked");
	$("body").css("overflow", "scroll");
	
	$('#mob1').get(0).pause();
    $('#mob1').get(0).currentTime = 0;
	$('#mob2').get(0).pause();
    $('#mob2').get(0).currentTime = 0;
	$('#mob3').get(0).pause();
    $('#mob3').get(0).currentTime = 0;
	
	bindButton6();
	
});

$("#close2").on("click", function() {
 
	$(".overlay2").toggleClass("overlay-clicked");
	$("body").css("overflow", "scroll");
	
	$('#vontade1').get(0).pause();
    $('#vontade1').get(0).currentTime = 0;
	$('#vontade2').get(0).pause();
    $('#vontade2').get(0).currentTime = 0;
	$('#vontade3').get(0).pause();
    $('#vontade3').get(0).currentTime = 0;
	
	bindButton4();
	
});





function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
} 


// 	PICTURE BREAK
function bindButton() {
$('.picture').one('click', function() {
	var video = $("#video1");
    var newvideo = $("#video1-real");

	video.hide();
	$(".caption").hide();
	$(".tag-container").hide();
	$(".laurels").hide();
	$(".circle").toggleClass("circle-hover");
	
	newvideo.show();
	newvideo.get(0).currentTime = 0;
	
	toggleFullscreen(this); 
	
});
}

bindButton();

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);
function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        var video = $("#video1");
		var newvideo = $("#video1-real");
	
		video.show();
		$(".caption").show();
		$(".tag-container").show();
		$(".laurels").show();
		newvideo.hide();	
		newvideo.get(0).currentTime = 0;
		newvideo.attr("src","about:blank");
		bindButton();
		}
	
	newvideo.remove();
	
	video.after( "<div class='plyr__video-embed' id='video1-real' style='display: none; object-fit: contain'> <iframe src='https://player.vimeo.com/video/1050185399?h=eeaeff5d79&amp;loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;transparent=0&amp;gesture=media&amp;pip=false&amp;fullscreen=false&amp;vimeo_logo=false&amp;transcript=false&amp;cc=false&amp;speed=false'></iframe></div>" );
	
}  










function bindButton2() {
$('.2024').one('click', function() {
	var video = $("#video2");
    var newvideo = $("#video2-real");

	video.hide();
	$(".caption").hide();
	$(".tag-container").hide();
	
	
	newvideo.show();
	newvideo.get(0).currentTime = 0;
	newvideo.attr("src","https://www.youtube.com/embed/8jIdSEORUDs?si=Yit3JEJXBDn7N6Z5&rel=0");

    toggleFullscreen(this); 
	
});
}

bindButton2();

document.addEventListener('fullscreenchange', exitHandler2);
document.addEventListener('webkitfullscreenchange', exitHandler2);
document.addEventListener('mozfullscreenchange', exitHandler2);
document.addEventListener('MSFullscreenChange', exitHandler2);
function exitHandler2() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        var video = $("#video2");
		var newvideo = $("#video2-real");
	
		video.show();
		$(".caption").show();
		$(".tag-container").show();
		newvideo.hide();	
		newvideo.get(0).currentTime = 0;
		newvideo.attr("src","about:blank");
		bindButton2();
		}
	
}  









// ARC
function bindButton3() {
$('.arc').one('click', function() {
	var video = $("#video3");
    var newvideo = $("#video3-real");

	video.hide();
	$(".caption").hide();
	$(".tag-container").hide();
	$(".circle").toggleClass("circle-hover");
	
	newvideo.show();
	newvideo.get(0).currentTime = 0;
	
	toggleFullscreen(this); 
	
	
	
});
}

bindButton3();

document.addEventListener('fullscreenchange', exitHandler3);
document.addEventListener('webkitfullscreenchange', exitHandler3);
document.addEventListener('mozfullscreenchange', exitHandler3);
document.addEventListener('MSFullscreenChange', exitHandler3);
function exitHandler3() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        var video = $("#video3");
		var newvideo = $("#video3-real");
	
		video.show();
		$(".caption").show();
		$(".tag-container").show();
		newvideo.hide();	
		newvideo.get(0).currentTime = 0;
		newvideo.attr("src","about:blank");
		bindButton3();
		}
	
	newvideo.remove();
	
	video.after( "<div class='plyr__video-embed' id='video3-real' style='display: none; object-fit: contain'> <iframe src='https://player.vimeo.com/video/76979871?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;transparent=0&amp;gesture=media&amp;pip=false&amp;fullscreen=false&amp;vimeo_logo=false&amp;transcript=false&amp;cc=false&amp;speed=false'></iframe></div>" );
	
}  










// MOB
function bindButton6() {
$('.mob').one('click', function() {
	var overlay = $(".overlay");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}

bindButton6();








// MA VONTADE
function bindButton4() {
$('.vontade').one('click', function() {
	var overlay = $(".overlay2");

	overlay.toggleClass("overlay-clicked");
	$("body").css("overflow", "hidden");
		
});
}

bindButton4();




