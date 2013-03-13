$("img").error(function(){
	$(this).attr("src", "./images/error.jpg");    
});


$("p").hover(function(){
	$(this).css("background-color","gray");
	$(this).css("color","white");
});

$("p").mouseout(function(){
	$(this).css("background-color","white");
	$(this).css("color","black");
	

});

$("h1").dblclick(function(){
	alert("It is NOT a link");

});

$("body").click(function(){
	$("#logtext").append('Log: You clicked!</br>');

});

