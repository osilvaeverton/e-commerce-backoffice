import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ebk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Nome 1'
    }
  ];

  displayedColumns = [ 'Id', 'Name' ];

  constructor() { }

  ngOnInit() {}

  createUser() {
    this.users.push({
      id: 2,
      name: 'Nome 2'
    });
  }

}
