import { Component, OnInit } from '@angular/core';
import { DayHttpService } from 'src/app/services/day-http.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  constructor(private dayHttpService: DayHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.dayHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.dayHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.dayHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.dayHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.dayHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
