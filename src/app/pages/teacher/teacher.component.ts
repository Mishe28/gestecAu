import { Component, OnInit } from '@angular/core';
import { TeacherHttpService } from 'src/app/services/teacher-http.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  constructor(private teacherHttpService: TeacherHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.teacherHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.teacherHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.teacherHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.teacherHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.teacherHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }
}
