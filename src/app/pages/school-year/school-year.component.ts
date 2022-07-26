import { Component, OnInit } from '@angular/core';
import { SchoolYearHttpService } from 'src/app/services/school-year-http.service';

@Component({
  selector: 'app-school-year',
  templateUrl: './school-year.component.html',
  styleUrls: ['./school-year.component.css']
})
export class schoolYearComponent implements OnInit {

  constructor(private schoolYearHttpService: SchoolYearHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.schoolYearHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.schoolYearHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.schoolYearHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.schoolYearHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.schoolYearHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
