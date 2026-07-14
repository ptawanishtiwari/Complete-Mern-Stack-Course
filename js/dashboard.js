// ================================
// AUTH CHECK
// ================================

protectPage();
showUser();


// ================================
// COURSE DATA
// ================================

const lessons = [

{
    title:"Day 1 - Introduction to MERN Stack",
    duration:"1 Hour 15 Minutes",

    video:"./videos/day1.mp4",

    notes:"./notes/day1.pdf",

    code:"./source/day1.zip",

    topics:[
        "What is MERN Stack?",
        "Frontend vs Backend",
        "Course Overview",
        "Software Installation",
        "Career Roadmap"
    ]
},

{
    title:"Day 2 - Networking Fundamentals",

    duration:"58 Minutes",

    video:"./videos/day2.mp4",

    notes:"./notes/day2.pdf",

    code:"./source/day2.zip",

    topics:[
        "Internet",
        "WWW",
        "HTTP",
        "HTTPS",
        "DNS",
        "Client Server Architecture"
    ]
},

{
    title:"Day 3 - HTML Complete",

    duration:"1 Hour 40 Minutes",

    video:"./videos/day3.mp4",

    notes:"./notes/day3.pdf",

    code:"./source/day3.zip",

    topics:[
        "HTML Structure",
        "Headings",
        "Paragraph",
        "Lists",
        "Forms",
        "Tables"
    ]
}

];


// ================================
// SELECTORS
// ================================

const sidebar=document.querySelector(".sidebar ul");

const video=document.querySelector("video");

const title=document.querySelector(".video-card h3");

const duration=document.querySelector(".video-card p");

const topics=document.querySelector(".topics ul");

const prevBtn=document.querySelector(".lesson-nav button:first-child");

const nextBtn=document.querySelector(".lesson-nav button:last-child");

const resourceCards=document.querySelectorAll(".resource");

let currentIndex=0;



// ================================
// LOAD LESSON
// ================================

function loadLesson(index){

currentIndex=index;

const lesson=lessons[index];


// Video

video.src=lesson.video;

video.load();


// Title

title.innerHTML=lesson.title;


// Duration

duration.innerHTML="Duration : "+lesson.duration;


// Topics

topics.innerHTML="";

lesson.topics.forEach(topic=>{

topics.innerHTML+=`<li>${topic}</li>`;

});


// Active Sidebar

document.querySelectorAll(".sidebar li").forEach((item,i)=>{

item.classList.toggle("active",i===index);

});


// Disable Buttons

prevBtn.disabled=index===0;

nextBtn.disabled=index===lessons.length-1;


// Resource Links

resourceCards[0].onclick=()=>{

window.open(lesson.notes);

};

resourceCards[1].onclick=()=>{

window.open(lesson.code);

};

resourceCards[2].onclick=()=>{

alert("PPT Coming Soon");

};

resourceCards[3].onclick=()=>{

alert("Assignment Coming Soon");

};

}



// ================================
// CREATE PLAYLIST
// ================================

function createSidebar(){

sidebar.innerHTML="";

lessons.forEach((lesson,index)=>{

sidebar.innerHTML+=`

<li onclick="loadLesson(${index})">

<i class="fa-solid fa-circle-play"></i>

${lesson.title}

</li>

`;

});

}



// ================================
// NEXT BUTTON
// ================================

nextBtn.addEventListener("click",()=>{

if(currentIndex<lessons.length-1){

loadLesson(currentIndex+1);

}

});



// ================================
// PREVIOUS BUTTON
// ================================

prevBtn.addEventListener("click",()=>{

if(currentIndex>0){

loadLesson(currentIndex-1);

}

});



// ================================
// MOBILE SIDEBAR
// ================================

const menuBtn=document.getElementById("menuBtn");

const menu=document.getElementById("sidebar");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("show");

});



document.addEventListener("click",(e)=>{

if(window.innerWidth<992){

if(!menu.contains(e.target) && !menuBtn.contains(e.target)){

menu.classList.remove("show");

}

}

});




// ================================
// SEARCH
// ================================

const search=document.querySelector("input[type='search']");

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".sidebar li").forEach(item=>{

item.style.display=item.innerText.toLowerCase().includes(value)
?"flex":"none";

});

});




// ================================
// INIT
// ================================

createSidebar();

loadLesson(0);