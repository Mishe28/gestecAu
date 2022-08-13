import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor() { }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  guardar() {
    console.log('Guardado');
    this.display = false;
  }
  ocultarDialog() {
    this.display = false;
  }

  ngOnInit(): void {
  }

}
