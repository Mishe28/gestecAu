import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
}
guardar(){
  console.log("Guardado")
  this.display = false;
}
ocultarDialog() {
  this.display = false;
}

}
