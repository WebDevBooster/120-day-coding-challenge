chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            console.log("Lynda Fix");
            // ----------------------------------------------------------

            // Load IDs of completed courses and save them into local storage 
            // The user needs to visit the following URL while being logged in: 
            if (window.location.href === "https://www.lynda.com/home/CertificateOfCompletion/CertificationStatus.aspx") {

                setTimeout(function () {

                    // function for getting JSON data:
                    function getJSON(url) {
                        var resp;
                        var xmlHttp;

                        resp = "";
                        xmlHttp = new XMLHttpRequest();

                        if (xmlHttp != null) {
                            xmlHttp.open("GET", url, false);
                            xmlHttp.send(null);
                            resp = xmlHttp.responseText;
                        }

                        return resp;
                    }

                    var milliseconds = Date.now();
                    // URL for loading JSON with all of the completed course data: 
                    var certUrl = "https://www.lynda.com/home/CertificateOfCompletion/GetCertificatesByFilter?PageNumber=1&Start=0&Limit=99999&SortBy=CompletionDate&SortByOrder=1&_=" + milliseconds.toString;

                    var gjson;
                    // Get JSON data with all courses completed by the user:
                    gjson = getJSON(certUrl);

                    // Number of certificates (the same as the number of completed courses):
                    var certNumber = JSON.parse(gjson.valueOf()).length;

                    var courseNames = [],
                        courseIDs = [],
                        authorNames = [];

                    for (var i = certNumber - 1; i >= 0; i--) {

                        // get the courseName of the last-completed course:
                        // JSON.parse(gjson.valueOf())[0]["CourseName"];

                        // get the courseId of the last-completed course:
                        // JSON.parse(gjson.valueOf())[0]["CourseId"];

                        // get the authorName of the last-completed course:
                        // JSON.parse(gjson.valueOf())[0]["AuthorName"];

                        courseNames[i] = JSON.parse(gjson.valueOf())[i]["CourseName"];
                        console.log(courseNames[i]);

                        courseIDs[i] = JSON.parse(gjson.valueOf())[i]["CourseId"];
                        console.log("Course ID: " + courseIDs[i]);

                        authorNames[i] = JSON.parse(gjson.valueOf())[i]["AuthorName"];
                        console.log("Author: " + authorNames[i]);
                    }

                    // localStorage only supports strings. 
                    // Arrays must be converted to a string format.
                    // Use JSON.stringify() to convert it into a JSON array
                    // and JSON.parse() to get it back.
                    localStorage.setItem("myLyndaCourses", JSON.stringify(courseNames));
                    localStorage.setItem("myLyndaCourseIDs", JSON.stringify(courseIDs));
                    localStorage.setItem("myLyndaAuthors", JSON.stringify(authorNames));

                    console.log(certNumber + " courses logged!");
                    alert(certNumber + " courses logged!\n\nVisit the author page of\n" + JSON.parse(gjson.valueOf())[0]["AuthorName"] + " now to see\nthe completed courses highlighted there.\nEnjoy!");

                }, 3000); // setTimeout

            } // Load IDs of completed courses and save them into local storage END


            // ----------------------------------------------------------
            // Highlight the card divs with the matching IDs

            // Card divs that we want to target:
            var cards = document.querySelectorAll("div.card");
            // IDs from local storage:
            var storedIDs = JSON.parse(localStorage.getItem("myLyndaCourseIDs"));
            // courseNames from local storage:
            var storedCourses = JSON.parse(localStorage.getItem("myLyndaCourses"));

            if (cards && storedIDs) {

                    for (var i = cards.length - 1; i >= 0; i--) {

                        for (var j = storedIDs.length - 1; j >= 0; j--) {
                            // console.log("ID " + [j] + ": " + storedIDs[j]);

                            // If the "data-course-id" attribute of a card matches a stored ID, 
                            // then we're gonna highlight the card div with a nice background color:
                            if (cards[i].getAttribute("data-course-id") === storedIDs[j].toString()) {
                                cards[i].style.backgroundColor = "rgba(0,222,22, .4)";
                                console.log("Highlighting course " + storedIDs[j] + ": " + storedCourses[j]);
                            }
                        }
                    }

            } // Highlight the card divs with the matching IDs END
            
            // ----------------------------------------------------------
            // Highlight Play List items with the matching IDs
            
            // TO DO:
            // This code below only works on the initially loaded play list page.
            // It doesn't work on the other playlists because they are loaded via AJAX
            // So, I need to figure out a way to get the DOM objects that get loaded via AJAX 
            // in order to be able to manipulate them.

            // li items that we want to target:
            var lis = document.querySelectorAll("li.qItem");

            if ((window.location.href.indexOf("lynda.com/Playlist") > -1) && lis && storedIDs) {

                for (var i = lis.length - 1; i >= 0; i--) {

                    for (var j = storedIDs.length - 1; j >= 0; j--) {
                        // console.log("ID " + [j] + ": " + storedIDs[j]);

                        // If the "data-course-id" attribute of a li item matches a stored ID, 
                        // then we're gonna highlight the li with a nice background color:
                        if (lis[i].getAttribute("data-course-id") === storedIDs[j].toString()) {
                            lis[i].style.backgroundColor = "rgba(0,222,22, .4)";
                            lis.log("Highlighting course " + storedIDs[j] + ": " + storedCourses[j]);
                        }
                    }
                }

            } // Highlight Play List items with the matching IDs END



        }
    }, 10);
});