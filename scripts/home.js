document.getElementById("currentYear").textContent=new Date().getFullYear();
document.getElementById("lastModified").textContent=`Last Modified: ${document.lastModified}`;

const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navmenu");

menuBtn.addEventListener("click", () =>
{
    navMenu.classList.toggle("show");
}
);

const courses= [
    {code:"WDD130", name:"Web Fundamental", credit:3, completed:true},
    {code: "WDD131", name:"Dynamic Web Fundamental", credit:3, completed:true},
    {code:"CSE110", name:"Programming Building Block", credit:2 , completed:true},
    {code:"CSE111", name: "Programming with Functions", credit:3, completed:true},
    {code:"CSE210", name:"Programming with Classes", credit:3, completed:true},
    {code: "WDD230", name:"Web FrontEnd Development 1", credit:3, completed:false},
];

const courseList=document.getElementById("courseList");
const creditTotal=document.getElementById("creditTotal");

function displayCourses(filteredCourses) {
    courseList.innerHTML="";
    let total= 0;

    filteredCourses.forEach(course => {
        const card= document.createElement("div");
        card.className="course";
        if (course.completed) card.classList.add("completed")
        card.innerHTML=`<strong>${course.code}</strong>: ${course.name} (${course.credit} credits)`;
        courseList.appendChild(card);
        total+=course.credit;
    });

    creditTotal.textContent=total;
}

displayCourses(courses)
document.getElementById("showALL").addEventListener("click", () =>displayCourses(courses));
document.getElementById("showCSE").addEventListener("click", () =>
    displayCourses(courses.filter(course =>course.code.startsWith("CSE")))
);
document.getElementById("showWDD").addEventListener("click", () =>
    displayCourses(courses.filter(course=>course.code.startsWith("WDD")))
);