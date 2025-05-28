import byuiCourse from "./courses.mjs";
import { setSectionSelection } from "./section.mjs";
import { setTitle, renderSections } from "./output.mjs";
  
  
document.addEventListener("DOMContentLoaded", () => {
    setTitle(byuiCourse); 
    setSectionSelection(byuiCourse.sections); 
    renderSections(byuiCourse.sections); 
})
  
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
  });
  
  setTitle(byuiCourse);
  setSectionSelection(byuiCourse.sections);
  renderSections(byuiCourse.sections);