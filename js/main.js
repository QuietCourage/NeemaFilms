$(document).ready(function(){

//Click on See more Details:
	
	// Show Hide Details
	
	$(".seeMoreDetails").click(function(){
		$(this).siblings(".movieDetails").show();
		$(this).hide();
		$(this).siblings(".hideDetails").show();
	});
	// Hide 'See More details'
	$(".hideDetails").click(function(){
		$(this).siblings(".movieDetails").hide();
		$(this).hide();
		$(this).siblings(".seeMoreDetails").show();
	});
	// Remove Button ('X')
	$(".movieContainer").hover(function()  {
		$(this).children(".removeButton").toggle();	
	});	

	$("#filterButton").click(function() {
		var ratingSelect = $("#ratingSelect").val();
		var yearLowerBound = $("#yearLowerBound").val();
		var yearUpperBound = $("#yearUpperBound").val();
		var runtimeLowerBound = $("#runtimeLowerBound").val();
		var runtimeUpperBound = $("#runtimeUpperBound").val();

		yearLowerBound = parseInt(yearLowerBound);
		yearUpperBound = parseInt(yearUpperBound);
		runtimeLowerBound = parseInt(runtimeLowerBound);
		runtimeUpperBound = parseInt(runtimeUpperBound);

		console.log(yearLowerBound);
		console.log(yearUpperBound);
		console.log(runtimeLowerBound);
		console.log(runtimeUpperBound);

		if (isNaN(runtimeLowerBound)) {
			runtimeLowerBound = 0;	
		}
		if (isNaN(runtimeUpperBound)) {
			runtimeUpperBound = 999;
		}

		$(".movieContainer").each(function() {
			var movieRating = $(this).attr("data-rating");
			var movieYear = $(this).attr("data-year");
			var movieRuntime = $(this).attr("data-runtime");
			console.log("movieRating", movieRating);
			console.log("movieYear", movieYear);
			console.log("movieRuntime", movieRuntime);

			movieYear = parseInt(movieYear);
			movieRuntime = parseInt(movieRuntime);

			if ((ratingSelect==movieRating || ratingSelect =="all") 
				&& (yearLowerBound <= movieYear) 
				&& (movieYear <= yearUpperBound) 
				&& (runtimeLowerBound <= movieRuntime)
				&& (movieRuntime <= runtimeUpperBound)) {
					$(this).show();

			}
			else {
				// debugger;
				$(this).hide();
			}



				// if (movieRating=="data-rating"){
				// 	$(this).show();
				// 	$(this).siblings().hide();
				// }
				// else ()

			// 	if (".relatingSelect"==PG) {
			// 		$(this).show().;
			// 	}

			// }


			// 	each
			// 	if ratingselect = PG;
			// 		show all PG movieContainer
			// 		else hide 

		}); // end of each


	}); // end of your click

}); // end of document.ready
