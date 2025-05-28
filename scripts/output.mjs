export function setTitle(course) {
    const title = document.querySelector("#courseTitle");
    title.textContent = `${course.code}: ${course.name}`;
  }

  export function renderSections(sections) {
        const html = sections.map(
          (section) => `<tr>
          <td>${section.sectionNumber}</td>
          <td>${section.enrolled}</td>
          <td>${section.instructor}</td></tr>`
        );
        document.querySelector("#sections").innerHTML = html.join("");
      }
  
  
 
  
  