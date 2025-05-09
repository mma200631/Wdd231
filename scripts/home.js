document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navmenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more efficient programmers...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes, encapsulation...',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will focus on user experience, accessibility...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseList = document.getElementById("courseList");
const creditTotal = document.getElementById("creditTotal");

function displayCourses(filteredCourses) {
    courseList.innerHTML = "";
    let total = 0;

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course";
        if (course.completed) card.classList.add("completed");
        card.innerHTML = `<strong>${course.subject} ${course.number}</strong>: ${course.title} (${course.credits} credits)`;
        courseList.appendChild(card);
        total += course.credits;
    });

    creditTotal.textContent = total;
}

displayCourses(courses);

document.getElementById("showALL").addEventListener("click", () =>
    displayCourses(courses)
);

document.getElementById("showCSE").addEventListener("click", () =>
    displayCourses(courses.filter(course => course.subject === "CSE"))
);

document.getElementById("showWDD").addEventListener("click", () =>
    displayCourses(courses.filter(course => course.subject === "WDD"))
);
