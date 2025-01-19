// JavaScript Document


// MUDAR CURSOR ON HOVER
$('.column').hover(function() {
    $(this).css('cursor','pointer');
});







// ABRIR VIDEO FULLSCREEN
function bindButton() {
$('.picture').one('click', function() {
	var video = $("#video1");
    var newvideo = $("#video1-real");

	console.log("control yourself");
	video.hide();
	$(".caption").hide();
	$(".tag-container").hide();
	
	newvideo.show();
	newvideo.get(0).currentTime = 0;
	newvideo.get(0).play();

    toggleFullscreen(this); 
	
});
}

bindButton();

// SAIR DO VIDEO FULLSCREEN
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
		newvideo.hide();	
		newvideo.get(0).currentTime = 0;
		newvideo.get(0).pause();
		bindButton();
		}
	
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
	newvideo.attr("src","https://www.youtube.com/embed/8jIdSEORUDs?si=Yit3JEJXBDn7N6Z5&autoplay=1");

    toggleFullscreen(this); 
	
});
}

bindButton2();

// SAIR DO VIDEO FULLSCREEN
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




