
    var checkCoursesButton = document.getElementById('checkCourses');
    checkCoursesButton.addEventListener('click', function () {
        
        var td = $(".col_coc.course");
        var courses = $(".col_coc.course a.coursetitle");
        
        if ( td && courses ) {
            
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

                titles[i] = $(courses[i]).html();
                //        console.log(titles[i]);

                cIDs[i] = $(courses[i]).attr("data-cid");
                //        console.log("Course ID: " + cIDs[i]);

                // get the text part that comes after "| "
                var tdContents = $(td[i]).html().split("| ")[1];
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


            //    var storedTitles = JSON.parse(localStorage.getItem("LyndaCourses"));
            //    console.log("Stored titles: " + storedTitles);
            //    console.log(storedTitles.length);
            //    
            //    for (var i = storedTitles.length - 1; i >= 0; i--) {
            //        console.log("Title " + [i] + ": " + storedTitles[i]);
            //    }
            
        }
        
                
    }, false);
