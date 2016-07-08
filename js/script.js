/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

$(document).ready(function()
{
	// Variable to set the duration of the animation
	var animationTime = 370;
	
	// Variable to store the colours
	var colours = ["bd2c33", "e49420", "ecdb00", "3bad54", "1b7db9"];

	// Add rating information box after rating
	var ratingInfobox = $("<div />")
		.attr("id", "ratinginfo")
		.insertAfter($("#rating"));

	// Function to colorize the right ratings
	var colourizeOverallRatings = function(nrOfRatings) {
		$("#overall_rating li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
    
    var colourizeOverallDifficulty = function(nrOfRatings) {
		$("#overall_difficulty li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
	
	// Handle the hover events
	$("#overall_rating li a").hover(function() {
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
		colourizeOverallRatings($(this).parent().index());
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
		$("#overall_rating li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
    
    $("#overall_difficulty li a").hover(function() {
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
		colourizeOverallDifficulty($(this).parent().index());
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
		$("#overall_difficulty li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
	
	// Prevent the click event and show the rating
	$("#overall_rating li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
    $("#overall_difficulty li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
});