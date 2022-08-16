import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/course.model';
import { CourseHttpService } from 'src/app/services/course-http.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title='Cursos';
  courses: CourseModel[] = [];

  constructor(private courseHttpService: CourseHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.courseHttpService.findAll().subscribe(response => {
      this.courses = response.data;
      console.log(response);
    });
  }

  findOne() {
    this.courseHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.courseHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.courseHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.courseHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
