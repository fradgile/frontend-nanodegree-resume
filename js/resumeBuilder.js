var bio = {
 	"name"		: "Fergus Emmett",
 	"role"		: "Web Developer",
 	"contacts": {
 		"mobile"	: "(555) 555 5555",
 		"email"		: "fradgile@gmail.com",
    "github"  : "https://github.com/fradgile",
 		"twitter"	: "@fradgile",
 		"location"	: "Texas"
 	},
  "welcomeMessage": "Certified IT professional with experience in design, development and implementation of Oracle database solutions.",
 	"skills": ["Oracle", "PL/SQL", "APEX", "jQuery"],
 	"biopic"	: "images/FergCrop.jpg"
 };
bio.display = function(){
  var formattedName     = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole     = HTMLheaderRole.replace('%data%', bio.role);

  var formattedMobile   = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail    = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter  = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub   = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation   = HTMLlocation.replace('%data%', bio.contacts.location);

  var formattedBioPic   = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

  $("#header").prepend(formattedName, formattedRole);

  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

  $("#header").append(formattedBioPic, formattedWelcomeMsg);

  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
      $("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    };
  };
};


var work = {
  "jobs": [
    {
      "employer": "University Support Services",
      "title": "Software Developer",
      "location": "Great River, New York",
      "dates": "2012 - 2015",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Estee Lauder Companies",
      "title": "Senior Developer of Business Applications",
      "location": "Melville, New York",
      "dates": "2006 - 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
work.display = function()
{
  for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);

      var formattedJob = ( HTMLworkEmployer.replace('%data%', work.jobs[job].employer) +
                              HTMLworkTitle.replace('%data%', work.jobs[job].title));
      formattedJob += HTMLworkDates.replace('%data%', work.jobs[job].dates);
      formattedJob += HTMLworkLocation.replace('%data%', work.jobs[job].location);
      formattedJob += HTMLworkDescription.replace('%data%', work.jobs[job].description);

      $(".work-entry:last").append(formattedJob);
  };
};

var education = {
    "schools": [
    {
      "name": "Hofstra University",
      "location": "Hempstead, New York",
      "degree": "MBA",
      "majors": ["Finance"],
      "dates": "2010",
      "url": "www.hofstra.edu"
    },
    {
      "name": "University of Limerick",
      "location": "Limerick, Ireland",
      "degree": "Graduate Diploma in Computing",
      "majors": [""],
      "dates": "1998",
      "url": "www.ul.ie"
    },
    {
      "name": "Dublin City University",
      "location": "Dublin, Ireland",
      "degree": "B.Sc. (Hons) Biotechnology",
      "majors": [""],
      "dates": "1996",
      "url": "www.dcu.ie"
    }
    ],
    "onlineCourses": [
    {
      "title": "Front-End JavaScript Frameworks: AngularJS",
      "school": "Coursera",
      "date": "2015",
      "url": "https://www.coursera.org/learn/angular-js"
    },
    {
      "title": "Front-End Web UI Frameworks and Tools",
      "school": "Coursera",
      "date": "2015",
      "url": "https://www.coursera.org/learn/web-frameworks"
    },
    {
      "title": "HTML, CSS and JavaScript",
      "school": "Coursera",
      "date": "2015",
      "url": "https://www.coursera.org/learn/html-css-javascript"
    },
    {
      "title": "Mobile Cloud Computing with Android",
      "school": "Coursera",
      "date": "2015",
      "url": "https://www.coursera.org/account/accomplishments/specialization/KKV4XTNBUDQ5"
    },
    {
      "title": "R Programming",
      "school": "Coursera",
      "date": "2015",
      "url": "https://www.coursera.org/account/accomplishments/records/Yuyh2JP4phGGns8p"
    },
    {
      "title": "Web Application Architectures",
      "school": "Coursera",
      "date": "2014",
      "url": "https://www.coursera.org/account/accomplishments/records/8YJLfAgW6sxahUdf"
    }
    ]
};
education.display = function(){
  for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchool = ( HTMLschoolName.replace('%data%', education.schools[school].name) +
                              HTMLschoolDegree.replace('%data%', education.schools[school].degree));
      formattedSchool += HTMLschoolDates.replace('%data%', education.schools[school].dates);
      formattedSchool += HTMLschoolLocation.replace('%data%', education.schools[school].location);

      for (major in education.schools[school].majors) {
        formattedSchool += HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
      }
      $(".education-entry:last").append(formattedSchool);
  };

  if(education.onlineCourses.length > 0){
    $("#education").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var formattedCourse = ( HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title) +
                              HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school));
      formattedCourse += HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
      formattedCourse += HTMLonlineURL.replace(/%data%/gi, education.onlineCourses[course].url);

      $(".education-entry:last").append(formattedCourse);
    };

  };
};

var projects = {
    "projects": [
      {
        "title": "Technical Project 1",
        "dates": "2014 - 2015",
        "description": "This is a sample description of a project that I will later place here.",
        "images": ["http://lorempixel.com/image_output/technics-q-c-200-200-1.jpg", "http://lorempixel.com/image_output/technics-q-c-200-200-6.jpg"]
      },
      {
        "title": "Another Technical Project",
        "dates": "2013 - 2014",
        "description": "This is a sample description of a project that I will later place here.",
        "images": ["http://lorempixel.com/image_output/technics-q-c-200-200-4.jpg", "http://lorempixel.com/image_output/technics-q-c-200-200-9.jpg"]
      }
    ]
};
projects.display = function(){
  for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProject = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
      formattedProject += HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      formattedProject += HTMLprojectDescription.replace('%data%', projects.projects[project].description);

      for (image in projects.projects[project].images) {
        formattedProject += HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
      }
      $(".project-entry:last").append(formattedProject);
  };
};

// Call the display functions to add content to index.html
bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);


$("#main").append(internationalizeButton);

function inName(name){
  var nameArray = name.split(" ");
  var firstName = nameArray[0];
  var lastName  = nameArray[1];
  firstName = firstName.toLowerCase();
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName.toUpperCase();
  return firstName + " " + lastName;
};