import { Component, OnInit } from '@angular/core';
import { CareerHttpService } from 'src/app/services/career-http.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private careerHttpService:CareerHttpService) { }

  ngOnInit(): void {
    this.findAll();
  }

 findAll(){
   this.careerHttpService.findAll().subscribe(response=> {
     console.log(response);
   })
 }

 findOne(){
   this.careerHttpService.findOne(1).subscribe(response=> {
     console.log(response);
   })
 }
 create(payload:any){
   this.careerHttpService.create(null).subscribe(response=> {
     console.log(response);
   })
 }

 update(payload:any){
   this.careerHttpService.update(1,null).subscribe(response=> {
     console.log(response);
   })
 }
 delete(){
   this.careerHttpService.delete(1).subscribe(response=> {
     console.log(response);
   })
 }  

}
