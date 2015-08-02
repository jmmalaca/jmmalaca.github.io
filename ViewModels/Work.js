﻿/// <reference path="../typings/jquery/jquery.d.ts"/>
/// <reference path="../typings/knockout/knockout.d.ts"/>

//Show Education and Work Data ----------
function AddWorkData() {
    $("#Work-Page").append("<div class=\"Work-Box\"></div>");
    $(".Work-Box").append("<img class=\"Work_Logo\" src=\"images/Work/Work.png\" title=\"Work\"/>");
    $(".Work-Box").append("<a class=\"CV_Logo hover tooltipstered\" href=\"http://www.dropbox.com/s/x5y4bfev09dzrhv/cv_JoseMMalaca.pdf?dl=0\" target=\"_blank\" title=\"Download Resume\"> <img src=\"images/Work/CV.png\"/> </a>");
    $(".Work-Box").append("<div id=\"Works-List\" data-bind=\"foreach: WorksData\"> " +
        "<p class=\"WorkTitle BlockSelection\" data-bind=\"html: paragraphOne\"></p>" +
        "<p class=\"WorkDescription BlockSelection\" data-bind=\"html: paragraphTwo\"></p> " +
        "</div>");
    
    //Add Events Box
    $("#Work-Page").append("<div class=\"Events-Box\"></div>");
    $(".Events-Box").append("<img class=\"Events-Logo\" src=\"images/Work/Events.png\" />");
    $(".Events-Box").append("<div class=\"Events-List\" data-bind=\"foreach: EventsData\"> " +
        "<a class=\"Event\" data-bind=\"html: data, attr: {'id': title, href: url}\" target=\"_blank\"> </a> " +
        "</div>");
    
    //Add Education Box
    $("#Education-Page").append("<div class=\"Education-Box\"></div>");
    $(".Education-Box").append("<img class=\"Education_Logo\" src=\"images/Work/Education.png\" title=\"Education\" />");
    $(".Education-Box").append("<div id=\"University\">" +
        "<p class=\"BlockSelection\"> \><a id=\"DEI\" href=\"http://www.uc.pt/en/fctuc/dei\" target=\"_blank\">Department of Informatics Engineering</a>, Faculty of Science and Technology, University of Coimbra, Portugal</p> " +
        "<p id=\"Master\" class=\"BlockSelection\"><font size=\"3\" color=\"green\">☑</font> <b>Masters</b> in Informatics Engineering </p> " +
        "<p id=\"Graduate\" class=\"BlockSelection\"><font size=\"3\" color=\"green\">☑</font> Informatics Engineering <b>Graduate</b> </p> </div>");
    $(".Education-Box").append("<div id=\"School\"> " +
        "<p class=\"BlockSelection\"> \><a id=\"Brotero\" href=\"http://www.brotero.pt/\" target=\"blank\">High School Avelar Brotero</a>, Coimbra, Portugal</p> " +
        "<p id=\"Tecnichian\" class=\"BlockSelection\"><font size=\"3\" color=\"green\">☑</font> Informatics <b>Technician</b> (Técnico Informático)</p> </div>");

    //Add data for Labels Box
    $("#Education-Page").append("<div class=\"WorkLabels_Wordle\"></div>");
    $(".WorkLabels_Wordle").append("<img src=\"images/Work/Wordle_Work.PNG\" alt=\"Wordle\">");
}

var WorkData = function(title, company, companyUrl, date, description) {
    this.paragraphOne = "<font size=\"3\" color=\"green\"> ϟ </font> <b>"+title+"</b>, <a href=\""+companyUrl+"\" target=\"_blank\">"+company+"</a>, " + date + " </p>";
    this.paragraphTwo = description;
}

var EventData = function (title, url, data) {
    this.title = title;
    this.url = url;
    this.data = "<p class=\"BlockSelection\"> <font size=\"3\" color=\"green\"> ☑ </font> " + data + " </p>";
}

// The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
var viewModelData = {
    WorksData: [
        new WorkData("Software Engineer", "BroadScope, Lda", "http://www.broadscope.eu/", "'14/..", "The traineeship focus on Sentiment Analysis has been closed. New challenges will come with the invitation to be part of the BroadScope team, and help build the company projects. Develop mainly in the backend system, and guaranteeing the proper test coverage, are the main tasks ahead. <b>Visual Studio</b>, <b>C#</b>, <b>Linq</b>, <b>unit testing</b> are the main keys for this work."),
        new WorkData("Software Engineer Trainee", "BroadScope, Lda", "http://www.broadscope.eu/", "'13/14", "<b>Research and develop</b> solutions, analyze results and present reports. Turn raw data into useful data, was the project presented by the BroadScope involving three major areas: <b>\"Social/Text Mining\", \"Natural Language Processing\" and \"Machine Learning\"</b>.")
    ],

    EventsData: [
        new EventData("RAW", "http://rawopendata.ipn.pt/", "Raising Awareness Of Open Data '14"),
        new EventData("LxMLS", "http://lxmls.it.pt/2014/", "Lisbon Machine Learning School '14"),
        new EventData("Sapo", "https://codebits.eu/cartOOn\\", "SAPO Codebits '14")
    ]
};

//document ready event ----------
$(document).ready(function() {
    AddWorkData();
    ko.applyBindings(viewModelData);
});
