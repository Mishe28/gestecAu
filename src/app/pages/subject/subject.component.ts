import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }
  guardar() {
    console.log("Guardado")
    this.display = false;
  }
  ocultarDialog() {
    this.display = false;
  }

}
