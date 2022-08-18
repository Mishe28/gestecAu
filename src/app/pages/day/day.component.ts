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
   
  }

}
