document.addEventListener('DOMContentLoaded', () => {

	function myFunction() {
		var x = document.getElementById('myDIV');
		if (x.style.display === 'none') {
		  x.style.display = 'block';
		} else {
		  x.style.display = 'none';
		}
	  }

	// Elements
	const header = document.querySelector('.codeplayer__nav');
	const playerContainer = document.querySelector('.codeplayer__player');
	const playerToggles = Array.from(document.querySelectorAll('.codeplayer__toggle'));
	const windowHeight = window.innerHeight;
	const headerHeight = header.clientHeight;

	// Style Elements
	playerContainer.style.height = `${windowHeight - headerHeight}px`;

	// Event Listeners
	playerToggles.forEach(toggle => {
		toggle.addEventListener('click', (e) => {
			toggle.classList.toggle('codeplayer__toggle--selected');
			let activeDiv = toggle.innerHTML;

			if (document.getElementById(`${activeDiv}Container`).style.display === 'block') {
				document.getElementById(`${activeDiv}Container`).style.display = 'none';

			} else {
				document.getElementById(`${activeDiv}Container`).style.display = 'block';
			}
		})
	});
});
// // JavaScript Document
// var wHeight = $(window).height();
// var headerHeight = $("#header").height();
// var codeContainerHeight = wHeight-headerHeight;

// $(".codeContainer").height(codeContainerHeight+"px");

// $(".toggle").click(function(e) {
// 	$(this).toggleClass("selected");
// 	var activeDiv = $(this).html();
	
// 	$("#"+activeDiv+"Container").toggle();
// 	var showingDivs = $(".codeContainer").filter(function() {
// 		return($(this).css("display") !== "none");
// 	}).length;
// 	var width = 100/showingDivs;
// 	$(".codeContainer").width(width + "%");
// 	$("#resultsFrame").width(width + "%");
// });

// $("#runButton").click(function() {
// 	$("iframe").contents().find("html").html($('<style>' + $("#cssCode").val() + '</style>' + $("#htmlCode").val()));
// });
