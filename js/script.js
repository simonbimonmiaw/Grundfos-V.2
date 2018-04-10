// JavaScript Document

var Front = document.getElementById("Front");
	var HowTo = document.getElementById("HowTo");
	var Profile = document.getElementById("Profile");

var Video = document.getElementById("Video");

var Quiz = document.getElementById("Quiz");
	var QuizAnswers = document.getElementById("QuizAnswers");

function Clear() {
    localStorage.clear();
    level();
}

function Reload() {
	location.reload();
}

function toProfile() {
    'use strict';
    HowTo.classList.add("hidden");
    Profile.classList.remove("hidden");
    document.getElementById("toProfileButton").classList.add("hidden");
    document.getElementById("fromProfileButton").classList.remove("hidden");
}

function fromProfile() {
    'use strict';
    Profile.classList.add("hidden");
    HowTo.classList.remove("hidden");
    document.getElementById("fromProfileButton").classList.add("hidden");
    document.getElementById("toProfileButton").classList.remove("hidden");
}

 // Video Reminder:

if (localStorage.getItem('Last-Video') === "video1_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: Commercial Heating Systems";
	document.getElementById("resume_link").onclick = video1;
}
else if (localStorage.getItem('Last-Video') === "video1_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: Commercial Heating Systems";
	document.getElementById("resume_link").onclick = video1;
}
else if (localStorage.getItem('Last-Video') === "video1_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: Commercial Heating Systems";
	document.getElementById("resume_link").onclick = video1;
}
else if (localStorage.getItem('Last-Video') === "video1_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: Commercial Heating Systems";
	document.getElementById("resume_link").onclick = video1;
}
else if (localStorage.getItem('Last-Video') === "video2_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: Life Cycle Costs";
	document.getElementById("resume_link").onclick = video2;
}
else if (localStorage.getItem('Last-Video') === "video2_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: Life Cycle Costs";
	document.getElementById("resume_link").onclick = video2;
}
else if (localStorage.getItem('Last-Video') === "video2_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: Life Cycle Costs";
	document.getElementById("resume_link").onclick = video2;
}
else if (localStorage.getItem('Last-Video') === "video2_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: Life Cycle Costs";
	document.getElementById("resume_link").onclick = video2;
}
else if (localStorage.getItem('Last-Video') === "video3_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: Water boosting in commercial buildings";
	document.getElementById("resume_link").onclick = video3;
}
else if (localStorage.getItem('Last-Video') === "video3_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: Water boosting in commercial buildings";
	document.getElementById("resume_link").onclick = video3;
}
else if (localStorage.getItem('Last-Video') === "video3_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: Water boosting in commercial buildings";
	document.getElementById("resume_link").onclick = video3;
}
else if (localStorage.getItem('Last-Video') === "video3_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: Water boosting in commercial buildings";
	document.getElementById("resume_link").onclick = video3;
}
else if (localStorage.getItem('Last-Video') === "video4_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: Air Conditioning";
	document.getElementById("resume_link").onclick = video4;
}
else if (localStorage.getItem('Last-Video') === "video4_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: Air Conditioning";
	document.getElementById("resume_link").onclick = video4;
}
else if (localStorage.getItem('Last-Video') === "video4_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: Air Conditioning";
	document.getElementById("resume_link").onclick = video4;
}
else if (localStorage.getItem('Last-Video') === "video4_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: Air Conditioning";
	document.getElementById("resume_link").onclick = video4;
}
else if (localStorage.getItem('Last-Video') === "video5_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: Wastewater";
	document.getElementById("resume_link").onclick = video5;
}
else if (localStorage.getItem('Last-Video') === "video5_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: Wastewater";
	document.getElementById("resume_link").onclick = video5;
}
else if (localStorage.getItem('Last-Video') === "video5_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: Wastewater";
	document.getElementById("resume_link").onclick = video5;
}
else if (localStorage.getItem('Last-Video') === "video5_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: Wastewater";
	document.getElementById("resume_link").onclick = video5;
}
else if (localStorage.getItem('Last-Video') === "video6_1") {
    document.getElementById("reminder_name").innerHTML = "Se film 1 under topic: About MAGNA3";
	document.getElementById("resume_link").onclick = video6;
}
else if (localStorage.getItem('Last-Video') === "video6_2" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 2 under topic: About MAGNA3";
	document.getElementById("resume_link").onclick = video6;
}
else if (localStorage.getItem('Last-Video') === "video6_3" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 3 under topic: About MAGNA3";
	document.getElementById("resume_link").onclick = video6;
}
else if (localStorage.getItem('Last-Video') === "video6_4" ) {
    document.getElementById("reminder_name").innerHTML = "Se film 4 under topic: About MAGNA3";
	document.getElementById("resume_link").onclick = video6;
}
else {
    document.getElementById("reminder").classList.add("hidden");
}

    // Into Video:

function video1() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video1_1");
    localStorage.setItem('Video1_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "1";
    
    if (localStorage.getItem("Video1_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video1_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video1_3") == 1) {
        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video1_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-1") === null || localStorage.getItem("Topic-1") === "video1") {
        localStorage.setItem("Topic-1", "video1");
    } 
    else if (localStorage.getItem("Topic-1") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-1", "video2");
        localStorage.setItem('Last-Video', "video1_2");
    } 
    else if (localStorage.getItem("Topic-1") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-1", "video3");
        localStorage.setItem('Last-Video', "video1_3");
    } 
    else if (localStorage.getItem("Topic-1") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-1", "video4");
        localStorage.setItem('Last-Video', "video1_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_1_1;
    document.getElementById("video_2_link").onclick = video_1_2;
    document.getElementById("video_3_link").onclick = video_1_3;
    document.getElementById("video_4_link").onclick = video_1_4;
    
    document.getElementById("quiz_button").onclick = quiz_1;
    
    level()
}
function video2() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video2_1");
    localStorage.setItem('Video2_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "2";
    
    if (localStorage.getItem("Video2_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video2_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video2_3") == 1) {
        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video2_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-2") === null || localStorage.getItem("Topic-2") === "video1") {
        localStorage.setItem("Topic-2", "video1");
    } 
    else if (localStorage.getItem("Topic-2") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-2", "video2");
        localStorage.setItem('Last-Video', "video2_2");
    } 
    else if (localStorage.getItem("Topic-2") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-2", "video3");
        localStorage.setItem('Last-Video', "video2_3");
    } 
    else if (localStorage.getItem("Topic-2") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-2", "video4");
        localStorage.setItem('Last-Video', "video2_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_2_1;
    document.getElementById("video_2_link").onclick = video_2_2;
    document.getElementById("video_3_link").onclick = video_2_3;
    document.getElementById("video_4_link").onclick = video_2_4;
    
    document.getElementById("quiz_button").onclick = quiz_2;
    
    level()
}
function video3() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video3_1");
    localStorage.setItem('Video3_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "3";
    
    if (localStorage.getItem("Video3_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video3_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video3_3") == 1) {
        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video3_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-3") === null || localStorage.getItem("Topic-3") === "video1") {
        localStorage.setItem("Topic-3", "video1");
    } 
    else if (localStorage.getItem("Topic-3") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-3", "video2");
        localStorage.setItem('Last-Video', "video3_2");
    } 
    else if (localStorage.getItem("Topic-3") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-3", "video3");
        localStorage.setItem('Last-Video', "video3_3");
    } 
    else if (localStorage.getItem("Topic-3") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-3", "video4");
        localStorage.setItem('Last-Video', "video3_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_3_1;
    document.getElementById("video_2_link").onclick = video_3_2;
    document.getElementById("video_3_link").onclick = video_3_3;
    document.getElementById("video_4_link").onclick = video_3_4;
    
    document.getElementById("quiz_button").onclick = quiz_3;
    
    level()
}
function video4() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video4_1");
    localStorage.setItem('Video4_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "4";
    
    if (localStorage.getItem("Video4_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video4_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video4_3") == 1) {
        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video4_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-4") === null || localStorage.getItem("Topic-4") === "video1") {
        localStorage.setItem("Topic-4", "video1");
    } 
    else if (localStorage.getItem("Topic-4") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-4", "video2");
        localStorage.setItem('Last-Video', "video4_2");
    } 
    else if (localStorage.getItem("Topic-4") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-4", "video3");
        localStorage.setItem('Last-Video', "video4_3");
    } 
    else if (localStorage.getItem("Topic-4") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-4", "video4");
        localStorage.setItem('Last-Video', "video4_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_4_1;
    document.getElementById("video_2_link").onclick = video_4_2;
    document.getElementById("video_3_link").onclick = video_4_3;
    document.getElementById("video_4_link").onclick = video_4_4;
    
    document.getElementById("quiz_button").onclick = quiz_4;
    
    level()
}
function video5() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video5_1");
    localStorage.setItem('Video5_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "5";
    
    if (localStorage.getItem("Video5_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video5_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video5_3") == 1) {
        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video5_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-5") === null || localStorage.getItem("Topic-5") === "video1") {
        localStorage.setItem("Topic-5", "video1");
    } 
    else if (localStorage.getItem("Topic-5") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-5", "video2");
        localStorage.setItem('Last-Video', "video5_2");
    } 
    else if (localStorage.getItem("Topic-5") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-5", "video3");
        localStorage.setItem('Last-Video', "video5_3");
    } 
    else if (localStorage.getItem("Topic-5") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-5", "video4");
        localStorage.setItem('Last-Video', "video5_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_5_1;
    document.getElementById("video_2_link").onclick = video_5_2;
    document.getElementById("video_3_link").onclick = video_5_3;
    document.getElementById("video_4_link").onclick = video_5_4;
    
    document.getElementById("quiz_button").onclick = quiz_5;
    
    level()
}
function video6() {
    "use strict";
    HowTo.classList.remove("hidden");
    Profile.classList.add("hidden");
	Front.classList.add("hidden");
    Video.classList.remove("hidden");
    Quiz.classList.add("hidden");
    
    document.getElementById("video_1_check").classList.add("hid");
    document.getElementById("video_2_check").classList.add("hid");
    document.getElementById("video_3_check").classList.add("hid");
    document.getElementById("video_4_check").classList.add("hid");
    
    localStorage.setItem('Last-Video', "video6_1");
    localStorage.setItem('Video6_1', 1);
    document.getElementById("reminder").classList.add("hidden");
    
    var VideoNr = "_1";
    var TopicNr = "6";
    
    if (localStorage.getItem("Video6_1") == 1) {
        document.getElementById("video_1_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video6_2") == 1) {
        document.getElementById("video_2_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video6_3") == 1) {

        document.getElementById("video_3_check").classList.remove("hid");
    }
    if (localStorage.getItem("Video6_4") == 1) {
        document.getElementById("video_4_check").classList.remove("hid");
    }
    
    if (localStorage.getItem("Topic-6") === null || localStorage.getItem("Topic-6") === "video1") {
        localStorage.setItem("Topic-6", "video1");
    } 
    else if (localStorage.getItem("Topic-6") === "video2") {
        var VideoNr = "_2";
        localStorage.setItem("Topic-6", "video2");
        localStorage.setItem('Last-Video', "video6_2");
    } 
    else if (localStorage.getItem("Topic-6") === "video3") {
        var VideoNr = "_3";
        localStorage.setItem("Topic-6", "video3");
        localStorage.setItem('Last-Video', "video6_3");
    } 
    else if (localStorage.getItem("Topic-6") === "video4") {
        var VideoNr = "_4";
        localStorage.setItem("Topic-6", "video4");
        localStorage.setItem('Last-Video', "video6_4");
    } 
    
    document.getElementById("video_heading").innerHTML = "Video " + TopicNr + VideoNr;
    document.getElementById("video_1").innerHTML = "video " + TopicNr + "_1";
    document.getElementById("video_2").innerHTML = "video " + TopicNr + "_2";
    document.getElementById("video_3").innerHTML = "video " + TopicNr + "_3";
    document.getElementById("video_4").innerHTML = "video " + TopicNr + "_4";
    
    document.getElementById("video_1_link").onclick = video_6_1;
    document.getElementById("video_2_link").onclick = video_6_2;
    document.getElementById("video_3_link").onclick = video_6_3;
    document.getElementById("video_4_link").onclick = video_6_4;
    
    document.getElementById("quiz_button").onclick = quiz_6;
    
    level()
}

    // Under Topic:

function video_1_1() {
    localStorage.setItem("Topic-1", "video1");
    localStorage.setItem('Video1_1', 1);
    video1();
}
function video_1_2() {
    localStorage.setItem("Topic-1", "video2");
    localStorage.setItem('Video1_2', 1);
    video1();
}
function video_1_3() {
    localStorage.setItem("Topic-1", "video3");
    localStorage.setItem('Video1_3', 1);
    video1();
}
function video_1_4() {
    localStorage.setItem("Topic-1", "video4");
    localStorage.setItem('Video1_4', 1);
    video1();
}
function video_2_1() {
    localStorage.setItem("Topic-2", "video1");
    localStorage.setItem('Video2_1', 1);
    video2();
}
function video_2_2() {
    localStorage.setItem("Topic-2", "video2");
    localStorage.setItem('Video2_2', 1);
    video2();
}
function video_2_3() {
    localStorage.setItem("Topic-2", "video3");
    localStorage.setItem('Video2_3', 1);
    video2();
}
function video_2_4() {
    localStorage.setItem("Topic-2", "video4");
    localStorage.setItem('Video2_4', 1);
    video2();
}
function video_3_1() {
    localStorage.setItem("Topic-3", "video1");
    localStorage.setItem('Video3_1', 1);
    video3();
}
function video_3_2() {
    localStorage.setItem("Topic-3", "video2");
    localStorage.setItem('Video3_2', 1);
    video3();
}
function video_3_3() {
    localStorage.setItem("Topic-3", "video3");
    localStorage.setItem('Video3_3', 1);
    video3();
}
function video_3_4() {
    localStorage.setItem("Topic-3", "video4");
    localStorage.setItem('Video3_4', 1);
    video3();
}
function video_4_1() {
    localStorage.setItem("Topic-4", "video1");
    localStorage.setItem('Video4_1', 1);
    video4();
}
function video_4_2() {
    localStorage.setItem("Topic-4", "video2");
    localStorage.setItem('Video4_2', 1);
    video4();
}
function video_4_3() {
    localStorage.setItem("Topic-4", "video3");
    localStorage.setItem('Video4_3', 1);
    video4();
}
function video_4_4() {
    localStorage.setItem("Topic-4", "video4");
    localStorage.setItem('Video4_4', 1);
    video4();
}
function video_5_1() {
    localStorage.setItem("Topic-5", "video1");
    localStorage.setItem('Video5_1', 1);
    video5();
}
function video_5_2() {
    localStorage.setItem("Topic-5", "video2");
    localStorage.setItem('Video5_2', 1);
    video5();
}
function video_5_3() {
    localStorage.setItem("Topic-5", "video3");
    localStorage.setItem('Video5_3', 1);
    video5();
}
function video_5_4() {
    localStorage.setItem("Topic-5", "video4");
    localStorage.setItem('Video5_4', 1);
    video5();
}
function video_6_1() {
    localStorage.setItem("Topic-6", "video1");
    localStorage.setItem('Video6_1', 1);
    video6();
}
function video_6_2() {
    localStorage.setItem("Topic-6", "video2");
    localStorage.setItem('Video6_2', 1);
    video6();
}
function video_6_3() {
    localStorage.setItem("Topic-6", "video3");
    localStorage.setItem('Video6_3', 1);
    video6();
}
function video_6_4() {
    localStorage.setItem("Topic-6", "video4");
    localStorage.setItem('Video6_4', 1);
    video6();
}

    // Back Button:

function go_back() {
    'use strict';
    Video.classList.add("hidden");
    Quiz.classList.add("hidden");
    HowTo.classList.remove("hidden");
	Profile.classList.add("hidden");
	Front.classList.remove("hidden");
}

    // Quiz:

function quiz_1() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next1_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video1;
}
function quiz_next1_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
	
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next1_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next1_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
	
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_1result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_1result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
    
	QuizAnswers.classList.add("hid");
	
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz1", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video1;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function quiz_2() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
   	document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next2_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video2;
}
function quiz_next2_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
    
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next2_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next2_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_2result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_2result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
	
	QuizAnswers.classList.add("hid");
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz2", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video2;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function quiz_3() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next3_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video3;
}
function quiz_next3_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
    
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next3_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next3_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_3result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_3result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
	
	QuizAnswers.classList.add("hid");
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz3", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video3;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function quiz_4() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next4_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video4;
}
function quiz_next4_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
    
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next4_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next4_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_4result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_4result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
	
	QuizAnswers.classList.add("hid");
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz4", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video4;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function quiz_5() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next5_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video5;
}
function quiz_next5_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
    
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next1_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next5_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_5result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_5result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
	
	QuizAnswers.classList.add("hid");
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz5", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video5;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function quiz_6() {
    'use strict';
    localStorage.removeItem('Last-Video');
    
    Video.classList.add("hidden");
    Quiz.classList.remove("hidden");
	QuizAnswers.classList.remove("hid");
    
    var quizAmount = 3;
    var questionNr = 1;
    
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next6_1;
    document.getElementById("quizNext").innerHTML = "Next &#8594;";
	document.getElementById("quizBack").onclick = video6;
}
function quiz_next6_1() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 2;
    
    if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_1", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_1", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_1", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_next6_2;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_next6_2() {
    'use strict';
    var quizAmount = 3;
    var questionNr = 3;
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_2", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_2", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_2", "incorrect");
    }
    
    document.getElementById("questionAmount").innerHTML = questionNr + " / " + quizAmount;
    document.getElementById("questionName").innerHTML = "Det her er spørgsmål " + questionNr;
    document.getElementById("quizNext").onclick = quiz_6result;
    
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = false;
    document.getElementById("no2").checked = false;
    document.getElementById("no3").checked = false;
    document.getElementById("no4").checked = false;
}
function quiz_6result() {
    'use strict';
    var quizAmount = 3;
    var questionNr = "Result";
	
	QuizAnswers.classList.add("hid");
    
     if (document.getElementById("yes1").checked) {
        localStorage.setItem("question_3", "correct");
    } else if (document.getElementById("no2").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no3").checked) {
        localStorage.setItem("question_3", "incorrect");
    } else if (document.getElementById("no4").checked) {
        localStorage.setItem("question_3", "incorrect");
    }
    
    if (localStorage.getItem("question_1") == "correct") { var question_1 = 1; } else { var question_1 = 0; }
    if (localStorage.getItem("question_2") == "correct") { var question_2 = 1; } else { var question_2 = 0; }
    if (localStorage.getItem("question_3") == "correct") { var question_3 = 1; } else { var question_3 = 0; }
    
    var Quiz_result = question_1 + question_2 + question_3;
    
    document.getElementById("questionAmount").innerHTML = questionNr;
    
    if (Quiz_result == quizAmount) {
        document.getElementById("quizNext").innerHTML = "Back to Frontpage &#8594;";
        document.getElementById("quizNext").onclick = go_back;
        document.getElementById("questionName").innerHTML = "Well Done! You had " + Quiz_result + " correct out of " + quizAmount;
        localStorage.setItem("Quiz6", 1);
        level()
    } else {
        document.getElementById("quizNext").innerHTML = "Try Again";
        document.getElementById("quizNext").onclick = video6;
        document.getElementById("questionName").innerHTML = "Try Again! You only had " + Quiz_result + " correct out of " + quizAmount;
    }
}

function check_box1() {
    document.getElementById("svar1").classList.add("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("yes1").checked = true;
}
function check_box2() {
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.add("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("no2").checked = true;
}
function check_box3() {
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.add("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("no3").checked = true;
}
function check_box4() {
    document.getElementById("svar1").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar2").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar3").classList.remove("platform__quiz__question__answers__item__on");
    document.getElementById("svar4").classList.add("platform__quiz__question__answers__item__on");
    document.getElementById("no4").checked = true;
}

    // Level Bar:

level()

function level() {
    if (localStorage.getItem("Video1_1") === "1") {
    var Video_1_1 = 1;
    } else { var Video_1_1 = 0; }
    if (localStorage.getItem("Video1_2") === "1") {
        var Video_1_2 = 1;
    } else { var Video_1_2 = 0; }
    if (localStorage.getItem("Video1_3") === "1") {
        var Video_1_3 = 1;
    } else { var Video_1_3 = 0; }
    if (localStorage.getItem("Video1_4") === "1") {
        var Video_1_4 = 1;
    } else { var Video_1_4 = 0; }
    if (localStorage.getItem("Quiz1") === "1") {
        var Quiz_1 = 4;
    } else { var Quiz_1 = 0; }
    
    if (localStorage.getItem("Video2_1") === "1") {
    var Video_2_1 = 1;
    } else { var Video_2_1 = 0; }
    if (localStorage.getItem("Video2_2") === "1") {
        var Video_2_2 = 1;
    } else { var Video_2_2 = 0; }
    if (localStorage.getItem("Video2_3") === "1") {
        var Video_2_3 = 1;
    } else { var Video_2_3 = 0; }
    if (localStorage.getItem("Video2_4") === "1") {
        var Video_2_4 = 1;
    } else { var Video_2_4 = 0; }
    if (localStorage.getItem("Quiz2") === "1") {
        var Quiz_2 = 4;
    } else { var Quiz_2 = 0; }
    
    if (localStorage.getItem("Video3_1") === "1") {
    var Video_3_1 = 1;
    } else { var Video_3_1 = 0; }
    if (localStorage.getItem("Video3_2") === "1") {
        var Video_3_2 = 1;
    } else { var Video_3_2 = 0; }
    if (localStorage.getItem("Video3_3") === "1") {
        var Video_3_3 = 1;
    } else { var Video_3_3 = 0; }
    if (localStorage.getItem("Video3_4") === "1") {
        var Video_3_4 = 1;
    } else { var Video_3_4 = 0; }
    if (localStorage.getItem("Quiz3") === "1") {
        var Quiz_3 = 4;
    } else { var Quiz_3 = 0; }
    
    if (localStorage.getItem("Video4_1") === "1") {
    var Video_4_1 = 1;
    } else { var Video_4_1 = 0; }
    if (localStorage.getItem("Video4_2") === "1") {
        var Video_4_2 = 1;
    } else { var Video_4_2 = 0; }
    if (localStorage.getItem("Video4_3") === "1") {
        var Video_4_3 = 1;
    } else { var Video_4_3 = 0; }
    if (localStorage.getItem("Video4_4") === "1") {
        var Video_4_4 = 1;
    } else { var Video_4_4 = 0; }
    if (localStorage.getItem("Quiz4") === "1") {
        var Quiz_4 = 4;
    } else { var Quiz_4 = 0; }
    
    if (localStorage.getItem("Video5_1") === "1") {
    var Video_5_1 = 1;
    } else { var Video_5_1 = 0; }
    if (localStorage.getItem("Video5_2") === "1") {
        var Video_5_2 = 1;
    } else { var Video_5_2 = 0; }
    if (localStorage.getItem("Video5_3") === "1") {
        var Video_5_3 = 1;
    } else { var Video_5_3 = 0; }
    if (localStorage.getItem("Video5_4") === "1") {
        var Video_5_4 = 1;
    } else { var Video_5_4 = 0; }
    if (localStorage.getItem("Quiz5") === "1") {
        var Quiz_5 = 4;
    } else { var Quiz_5 = 0; }

    if (localStorage.getItem("Video6_1") === "1") {
    var Video_6_1 = 1;
    } else { var Video_6_1 = 0; }
    if (localStorage.getItem("Video6_2") === "1") {
        var Video_6_2 = 1;
    } else { var Video_6_2 = 0; }
    if (localStorage.getItem("Video6_3") === "1") {
        var Video_6_3 = 1;
    } else { var Video_6_3 = 0; }
    if (localStorage.getItem("Video6_4") === "1") {
        var Video_6_4 = 1;
    } else { var Video_6_4 = 0; }
    if (localStorage.getItem("Quiz6") === "1") {
        var Quiz_6 = 4;
    } else { var Quiz_6 = 0; }
    
    var Level_full = Math.round(((Video_1_1 + Video_1_2 + Video_1_3 + Video_1_4 + Quiz_1 + Video_2_1 + Video_2_2 + Video_2_3 + Video_2_4 + Quiz_2 + Video_3_1 + Video_3_2 + Video_3_3 + Video_3_4 + Quiz_3 + Video_4_1 + Video_4_2 + Video_4_3 + Video_4_4 + Quiz_4 + Video_5_1 + Video_5_2 + Video_5_3 + Video_5_4 + Quiz_5 + Video_6_1 + Video_6_2 + Video_6_3 + Video_6_4 + Quiz_6) * 100) / 48);

    document.getElementById("levelbar_procent").innerHTML = Level_full + "% Gennemført af Grundfos Ecademy";
    document.getElementById("levelbar_filled").style.width = Level_full + "%";
}