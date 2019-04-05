// JavaScript Document
var wHeight = $(window).height();
var headerHeight = $("#header").height();
var codeContainerHeight = wHeight-headerHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggle").click(function() {
	$(this).toggleClass("selected");
	var activeDiv = $(this).html();
	$("#"+activeDiv+"Container").toggle();
	var showingDivs = $(".codeContainer").filter(function() {
		return($(this).css("display") !== "none");
	}).length;
	var width = 100/showingDivs;
	$(".codeContainer").width(width + "%");
	$("#resultsFrame").width(width + "%");
});

$("#runButton").click(function() {
	$("iframe").contents().find("html").html($('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val()));
});
