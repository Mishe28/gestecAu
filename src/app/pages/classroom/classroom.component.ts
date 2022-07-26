import { Component, OnInit } from '@angular/core';
import { ClassroomHttpService } from 'src/app/services/classroom-http.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  constructor(private classroomHttpService:ClassroomHttpService) { }

  ngOnInit(): void {
    this.findAll();
  }

 findAll(){
   this.classroomHttpService.findAll().subscribe(response=> {
     console.log(response);
   })
 }

 findOne(){
   this.classroomHttpService.findOne(1).subscribe(response=> {
     console.log(response);
   })
 }
 create(payload:any){
   this.classroomHttpService.create(null).subscribe(response=> {
     console.log(response);
   })
 }

 update(payload:any){
   this.classroomHttpService.update(1,null).subscribe(response=> {
     console.log(response);
   })
 }
 delete(){
   this.classroomHttpService.delete(1).subscribe(response=> {
     console.log(response);
   })
 }  

}
