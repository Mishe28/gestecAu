import { Component, OnInit } from '@angular/core';
import { StatusHttpService } from 'src/app/services/status-http.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private statusHttpService: StatusHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.statusHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.statusHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.statusHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.statusHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.statusHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
