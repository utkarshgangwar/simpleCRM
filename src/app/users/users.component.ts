import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title="This is user component"

  constructor() { }

  ngOnInit(): void {
  }

  updateValue(){
    return 'hellow'
  }

}
