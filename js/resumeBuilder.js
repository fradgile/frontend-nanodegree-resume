/*jshint globalstrict: true*/
"use strict";

var group_counter = 0;
var timelineDataSet = [];
// create a data set with groups
var groups = new vis.DataSet();


var bio = {
    "name": "Fergus Emmett",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(555) 555 5555",
        "email": "fradgile@gmail.com",
        "github": "https://github.com/fradgile",
        "twitter": "@fradgile",
        "location": "Texas"
    },
    "welcomeMessage": "Certified IT professional with experience in design, development and implementation of Oracle database solutions.",
    "skills": ["Oracle", "PL/SQL", "APEX", "jQuery"],
    "biopic": "images/FergCrop.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole);

    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    $("#header").append(formattedBioPic, formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
        }
    }
};


var work = {
    "jobs": [{
        "employer": "University Support Services",
        "title": "Software Developer",
        "location": "Great River, New York",
        "dates": "2012 - 2015",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "Estee Lauder Companies",
        "title": "Senior Developer of Business Applications",
        "location": "Melville, New York",
        "dates": "2006 - 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }]
};
work.display = function() {
    group_counter++;
    groups.add({
        id: group_counter,
        content: 'Employment'
    });

    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedJob = (HTMLworkEmployer.replace('%data%', work.jobs[job].employer) +
            HTMLworkTitle.replace('%data%', work.jobs[job].title));
        formattedJob += HTMLworkDates.replace('%data%', work.jobs[job].dates);
        formattedJob += HTMLworkLocation.replace('%data%', work.jobs[job].location);
        formattedJob += HTMLworkDescription.replace('%data%', work.jobs[job].description);

        $(".work-entry:last").append(formattedJob);

        timelineDataSet.push({
            group: group_counter,
            content: work.jobs[job].employer,
            start: new Date(work.jobs[job].dates.substring(0, 4)),
            end: new Date(work.jobs[job].dates.slice(-4))
        });


    }
};

var education = {
    "schools": [{
        "name": "Hofstra University",
        "location": "Hempstead, New York",
        "degree": "MBA",
        "majors": ["Finance"],
        "dates": "2010",
        "url": "http://bulletin.hofstra.edu/preview_program.php?catoid=76&poid=8532"
    }, {
        "name": "University of Limerick",
        "location": "Limerick, Ireland",
        "degree": "Graduate Diploma in Computing",
        "majors": [""],
        "dates": "1998",
        "url": "http://www.csis.ul.ie/course/LM330"
    }, {
        "name": "Dublin City University",
        "location": "Dublin, Ireland",
        "degree": "B.Sc. (Hons) Biotechnology",
        "majors": [""],
        "dates": "1996",
        "url": "https://www.dcu.ie/prospective/deginfo.php?classname=BT"
    }],
    "onlineCourses": [{
        "title": "Front-End JavaScript Frameworks: AngularJS",
        "school": "Coursera",
        "date": "2015",
        "url": "https://www.coursera.org/learn/angular-js"
    }, {
        "title": "Front-End Web UI Frameworks and Tools",
        "school": "Coursera",
        "date": "2015",
        "url": "https://www.coursera.org/learn/web-frameworks"
    }, {
        "title": "HTML, CSS and JavaScript",
        "school": "Coursera",
        "date": "2015",
        "url": "https://www.coursera.org/learn/html-css-javascript"
    }, {
        "title": "Mobile Cloud Computing with Android",
        "school": "Coursera",
        "date": "2015",
        "url": "https://www.coursera.org/account/accomplishments/specialization/KKV4XTNBUDQ5"
    }, {
        "title": "R Programming",
        "school": "Coursera",
        "date": "2015",
        "url": "https://www.coursera.org/account/accomplishments/records/Yuyh2JP4phGGns8p"
    }, {
        "title": "Web Application Architectures",
        "school": "Coursera",
        "date": "2014",
        "url": "https://www.coursera.org/account/accomplishments/records/8YJLfAgW6sxahUdf"
    }]
};

education.display = function() {

    //  education.schoolTimelineDataSet = [];
    //education.onlineCoursesTimelineDataSet = [];
    group_counter++;
    groups.add({
        id: group_counter,
        content: 'Education'
    });

    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace('#', education.schools[school].url);
        formattedSchool = (formattedSchool.replace('%data%', education.schools[school].name) +
            HTMLschoolDegree.replace('%data%', education.schools[school].degree));
        formattedSchool += HTMLschoolDates.replace('%data%', education.schools[school].dates);
        formattedSchool += HTMLschoolLocation.replace('%data%', education.schools[school].location);

        for (var major in education.schools[school].majors) {
            formattedSchool += HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
        }
        $(".education-entry:last").append(formattedSchool);

        timelineDataSet.push({
            group: group_counter,
            content: '<a href="' + education.schools[school].url + '" target="_blank">' + education.schools[school].name + '<img src="./images/graduated.png" style="width: 48px; height: 48px;">' + '</a>',
            start: new Date(education.schools[school].dates)
        });

    }

    group_counter++;
    groups.add({
        id: group_counter,
        content: 'OnlineCourses'
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (var course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedCourse = HTMLonlineTitle.replace('#', education.onlineCourses[course].url);
            formattedCourse = (formattedCourse.replace('%data%', education.onlineCourses[course].title) +
                HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school));
            formattedCourse += HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
            formattedCourse += HTMLonlineURL.replace(/%data%/gi, education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedCourse);

            timelineDataSet.push({
                group: group_counter,
                content: '<a href="' + education.onlineCourses[course].url + '" target="_blank">' + education.onlineCourses[course].title + '<img src="./images/safe_mail.png" style="width: 48px; height: 48px;">' + '</a>',
                start: new Date(education.onlineCourses[course].date)
            });

        }

    }
};

var projects = {
    "projects": [{
        "title": "Technical Project 1",
        "dates": "2014 - 2015",
        "description": "This is a sample description of a project that I will later place here.",
        "images": [
            "http://lorempixel.com/image_output/technics-q-c-200-200-1.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-6.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-2.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-3.jpg"
        ]
    }, {
        "title": "Another Technical Project",
        "dates": "2013 - 2014",
        "description": "This is a sample description of a project that I will later place here.",
        "images": [
            "http://lorempixel.com/image_output/technics-q-c-200-200-4.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-9.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-10.jpg",
            "http://lorempixel.com/image_output/technics-q-c-200-200-8.jpg"
        ]
    }]
};
projects.display = function() {
    group_counter++;
    groups.add({
        id: group_counter,
        content: 'Projects'
    });

    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProject = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        formattedProject += HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        formattedProject += HTMLprojectDescription.replace('%data%', projects.projects[project].description);

        for (var image in projects.projects[project].images) {
            formattedProject += HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        }
        $(".project-entry:last").append(formattedProject);

        timelineDataSet.push({
            group: group_counter,
            content: projects.projects[project].title,
            start: new Date(projects.projects[project].dates.substring(0, 4)),
            end: new Date(projects.projects[project].dates.slice(-4))
        });

    }
};

function inName(name) {
    var nameArray = name.split(" ");
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    firstName = firstName.toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    lastName = lastName.toUpperCase();
    return firstName + " " + lastName;
}


function enhancements() {
    // Enhancements

    $('#main').addClass("container-fluid"); // Must add the container class in order to use Bootstrap

    $('#header').addClass("row")
        .removeClass("clear-fix");

    $('#name').next('span').attr("id", "role"); // Change text color.

    $('#workExperience').wrap('<div class="row" id="jobs-projects-ed"><div class="col-md-8"></div></div>');
    $('#projects').insertAfter('#workExperience');

    $('#education').addClass("col-md-4")
        .removeClass("gray") // the gray class is causing issues with bootstrap cols. Remove it.
        .insertAfter('.col-md-8');

    $('li:contains("github") span').wrap('<a class="github" href="' + bio.contacts.github + '" ></a>'); // Turn the github span into a link

    // responsive images
    $('img').addClass("img-responsive");
    $('.project-entry img').addClass("col-sm-6 col-md-3")
        .attr("alt", "Placeholder");

    $('.project-entry img').not(':first-of-type').addClass("hidden-inline-xs"); // Only show first image on xs screen

    $('img.biopic').attr("alt", "Head shot");

    $('a[href="#"]').each(function(i, l) {
        $(this).attr('href', 'https://www.google.com/#q=' + $(this).text());

    });

    $('a[href^="http"]').attr('target', '_blank');

}

function displayVisualization(timelineDataSet) {

    $('<div id="timelineContent" class="row hidden-inline-xs "></div>').insertAfter('#header');
    $('#timelineContent').append('<div id="menu">');
    $('#menu').append('<input type="button" id="fit" value="Fit Screen"/>');
    $('#menu').append('<input type="button" id="zoomIn" value="Zoom in"/>');
    $('#menu').append('<input type="button" id="zoomOut" value="Zoom out"/>');
    $('#menu').append('<input type="button" id="moveLeft" value="Move left"/>');
    $('#menu').append('<input type="button" id="moveRight" value="Move right"/>');
    /**
     * Move the timeline a given percentage to left or right
     * @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
     */
    function move(percentage) {
        var range = timeline.getWindow();
        var interval = range.end - range.start;
        timeline.setWindow({
            start: range.start.valueOf() - interval * percentage,
            end: range.end.valueOf() - interval * percentage
        });
    }
    /**
     * Zoom the timeline a given percentage in or out
     * @param {Number} percentage   For example 0.1 (zoom out) or -0.1 (zoom in)
     */
    function zoom(percentage) {
        var range = timeline.getWindow();
        var interval = range.end - range.start;
        timeline.setWindow({
            start: range.start.valueOf() - interval * percentage,
            end: range.end.valueOf() + interval * percentage
        });
    }

    document.getElementById('fit').onclick = function() {
        timeline.fit({
            animation: {
                duration: 2000,
                easingFunction: 'easeInOutQuart'
            }
        });
    };
    document.getElementById('zoomIn').onclick = function() {
        zoom(-0.2);
    };
    document.getElementById('zoomOut').onclick = function() {
        zoom(0.2);
    };
    document.getElementById('moveLeft').onclick = function() {
        move(0.2);
    };
    document.getElementById('moveRight').onclick = function() {
        move(-0.2);
    };

    var items = new vis.DataSet(timelineDataSet);
    // Configuration for the Timeline
    var options = {
        timeAxis: {
            scale: 'year',
            step: 1
        },
        width: '100%',
        editable: false,
        /* this option means you can add or remove items by clicking on the timeline */
        margin: {
            item: 20
        }
    };

    console.log("groups = " + JSON.stringify(groups));

    // Create a Timeline
    var container = document.getElementById('timelineContent');
    var timeline = new vis.Timeline(container);
    timeline.setOptions(options);
    timeline.setGroups(groups);
    timeline.setItems(items);

    $("#header").append('<button id="timelineButton" class="btn btn-primary btn-lg btn-block hidden-inline-xs ">Hide Timeline</button>');
    $("#timelineButton").click(function() {
        $('#timelineContent').slideToggle(1000);
        if ($("#timelineButton").html() == 'Hide Timeline') {
            $("#timelineButton").html('Show Timeline');
        } else {
            $("#timelineButton").html('Hide Timeline');
        }
    });

}

// Call the display functions to add content to index.html
bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

enhancements();
displayVisualization(timelineDataSet);

//$("#main").append(internationalizeButton);