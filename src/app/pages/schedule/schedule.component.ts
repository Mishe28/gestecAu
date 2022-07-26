import { Component, OnInit } from '@angular/core';
import { ScheduleHttpService } from 'src/app/services/schedule-http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private scheduleHttpService: ScheduleHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.scheduleHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.scheduleHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.scheduleHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.scheduleHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.scheduleHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
