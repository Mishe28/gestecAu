import { Component, OnInit } from '@angular/core';
import { LevelHttpService } from 'src/app/services/level-http.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor(private levelHttpService: LevelHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.levelHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.levelHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.levelHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.levelHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.levelHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
