import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.userHttpService.findAll().subscribe(response => {
      console.log(response);
    });
  }

  findOne() {
    this.userHttpService.findOne(1).subscribe(response => {
      console.log(response);
    });
  }
  create(payload: any) {
    this.userHttpService.create(null).subscribe(response => {
      console.log(response);
    });
  }

  update(payload: any) {
    this.userHttpService.update(1, null).subscribe(response => {
      console.log(response);
    });
  }
  delete() {
    this.userHttpService.delete(1).subscribe(response => {
      console.log(response);
    });
  }

}
