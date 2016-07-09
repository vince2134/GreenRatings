/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/

$(document).ready(function()
{
	// Variable to set the duration of the animation
	var animationTime = 370;
	
	// Variable to store the colours
	var colours = ["bd2c33", "e49420", "ecdb00", "3bad54", "1b7db9"];
    var coloursD = ["1b7db9", "3bad54", "ecdb00", "e49420", "bd2c33"];
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
				$(this).stop().animate({ backgroundColor : "#" + coloursD[nrOfRatings] } , animationTime);
			}
		});
	};
    var colourizeGrading = function(nrOfRatings) {
		$("#grading li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
     var colourizeApproach= function(nrOfRatings) {
		$("#approachability li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
     var colourizeLecture = function(nrOfRatings) {
		$("#lectures li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
     var colourizeExam = function(nrOfRatings) {
		$("#exams li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
    
    var colourizeGrading = function(nrOfRatings) {
		$("#grading li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
    
    var colourizeApproachability = function(nrOfRatings) {
		$("#approachability li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
    
    var colourizeLectures = function(nrOfRatings) {
		$("#lectures li a").each(function() {
			if($(this).parent().index() <= nrOfRatings) {
				$(this).stop().animate({ backgroundColor : "#" + colours[nrOfRatings] } , animationTime);
			}
		});
	};
    
    var colourizeExams = function(nrOfRatings) {
		$("#exams li a").each(function() {
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
    
<<<<<<< HEAD
        $("#grading li a").hover(function() {
=======
    // Handle the hover events
	$("#grading li a").hover(function() {
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
		colourizeGrading($(this).parent().index());
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
<<<<<<< HEAD
		$("#grading a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
    // Handle the hover events
	$("#exams li a").hover(function() {
=======
		$("#grading li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
    
    // Handle the hover events
	$("#approachability li a").hover(function() {
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
<<<<<<< HEAD
		colourizeExam($(this).parent().index());
=======
		colourizeApproachability($(this).parent().index());
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
<<<<<<< HEAD
		$("#exams li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
=======
		$("#approachability li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
    
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
    // Handle the hover events
	$("#lectures li a").hover(function() {
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
<<<<<<< HEAD
		colourizeLecture($(this).parent().index());
=======
		colourizeLectures($(this).parent().index());
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
		$("#lectures li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
	});
<<<<<<< HEAD
    // Handle the hover events
	$("#approachability li a").hover(function() {
=======
    
    // Handle the hover events
	$("#exams li a").hover(function() {
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
		
		// Empty the rating info box and fade in
		ratingInfobox
			.empty()
			.stop()
			.animate({ opacity : 1 }, animationTime);
		
		
		// Call the colourize function with the given index
<<<<<<< HEAD
		colourizeApproach($(this).parent().index());
=======
		colourizeExams($(this).parent().index());
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
	}, function() {
		
		// Fade out the rating information box
		ratingInfobox
			.stop()
			.animate({ opacity : 0 }, animationTime);
		
		// Restore all the rating to their original colours
<<<<<<< HEAD
		$("#approachability li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
=======
		$("#exams li a").stop().animate({ backgroundColor : "#fff" } , animationTime);
>>>>>>> a9c8fd1e99558b6b8a9c8e2e670f3059cefd3fb6
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
    $("#lectures li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
    $("#approachability li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
    $("#grading li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
    $("#Exams li a").click(function(e) {
		e.preventDefault();
		alert("You voted on item number " + ($(this).parent().index() + 1));
	});
});