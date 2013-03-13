function getWin(){
	return $(window).height();
};

function getDoc(){
	return $(document).height();
};

function getTop(){
	return $(this).scrollTop();
};
function winSize(){	
	$("#pageInfo").text(" Win : " + getWin() + " Doc: " + getDoc() + " Top : " + getTop());
};

$(window).resize(function() {
	winSize();
});

$(document).ready(function(){
	winSize();
});

$(document).scroll(function() {
	var doc =  parseInt(getDoc());
	var top = parseInt(getTop());
	var win = parseInt(getWin());
	if( doc >   top + win+1)
		winSize();
	else{
		var last = "<article>" + $('article:last-child').html() + "</article>";
		$('section').append(last);
		$("article:last-child>header>h1").text("Article Number: " + doc);
	}
});