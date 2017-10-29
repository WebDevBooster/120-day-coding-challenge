chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
        
        
        var td = document.querySelectorAll(".col_coc.course");
        var courses = document.querySelectorAll(".col_coc.course a.coursetitle");
        
        if ( (window.location.href === "https://www.lynda.com/home/CertificateOfCompletion/CertificationStatus.aspx") && td && courses ) {
            
            var intervalId1 = setInterval (function() {
                
                var titles = [],
                    cIDs = [],
                    authors = [];

                // The tdContents loop extracts the author name
                // from the inner HTML of each td element.
                // This loop makes sure that even if the author 
                // has more than 2 names (separated by a space) 
                // or if there is more than one author, 
                // author name(s) will be extracted correctly.
                for (var i = td.length - 1; i >= 0; i--) {

                    //        titles[i] = $(courses[i]).html();
                    titles[i] = courses[i].innerHTML;
                    //        console.log(titles[i]);

                    //        cIDs[i] = $(courses[i]).attr("data-cid");
                    cIDs[i] = courses[i].getAttribute("data-cid");
                    //        console.log("Course ID: " + cIDs[i]);

                    // get the text part that comes after "| "
                    //        var tdContents = $(td[i]).html().split("| ")[1];
                    var tdContents = td[i].innerHTML.split("| ")[1];
                    var info = tdContents.split(" ");
                    // the split produces an array
                    // console.log(info);

                    // the following loop combines all text parts 
                    // from the second array part onwards
                    for (var j = 0; j < info.length; j++) {
                        if ( j === 2 ) {
                            authors[i] = info[j];
                        }
                        if ( j > 2 ) {
                            authors[i] = authors[i] + " " + info[j];
                        }
                    }
                    //        console.log("Author(s): " + authors[i]);
                }

                // localStorage only supports strings. 
                // Arrays must be converted to a string format.
                // Use JSON.stringify() to convert it 
                // into a JSON array
                // and JSON.parse() to get it back.
                localStorage.setItem("LyndaCourses", JSON.stringify(titles));
                localStorage.setItem("LyndaCourseIDs", JSON.stringify(cIDs));
                localStorage.setItem("LyndaAuthors", JSON.stringify(authors));

            }, 1000);
            
        }
        
        
        
//        var cards = $("div.card");
        var cards = document.querySelectorAll("div.card");
        var storedIDs = JSON.parse(localStorage.getItem("LyndaCourseIDs"));
//        var storedIDs = ["369759", "375925", "483220"];
        
        
        if (cards && storedIDs) {
            
            var intervalId2 = setInterval (function() {
                
                //        console.log(cards[0]);

                for (var i = cards.length - 1; i >= 0; i--) {

                    for (var j = storedIDs.length - 1; j >= 0; j--) {
                        //                console.log("ID " + [j] + ": " + storedIDs[j]);

                        if ( cards[i].getAttribute("data-course-id") === storedIDs[j] ) {
                            cards[i].style.backgroundColor = "rgba(0,222,22, .4)";
                        }

                    }

                }
                
            }, 1000);
            
        }

	}
	}, 10);
});