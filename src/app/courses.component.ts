import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses", // css selector
  // {{}} = String interpolation
  // ngFor = Directives to manipulate the DOM

  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  // Dependency Injection
  constructor(service: CoursesService) {
    // Problems: Tightly coupled, Parameter dependent
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
