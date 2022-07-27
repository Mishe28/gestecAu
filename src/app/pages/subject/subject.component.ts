import { Component, OnInit } from '@angular/core';
import { SubjectHttpService } from 'src/app/services/subject-http.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectHttpService: SubjectHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.subjectHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.subjectHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.subjectHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.subjectHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.subjectHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
