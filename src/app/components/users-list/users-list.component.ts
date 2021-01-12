import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UsersService} from '../../sevices/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'age', 'actions'];
  dataSource: any;

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>();
  }

  ngAfterViewInit() {
    this.getHello();
  }

  getHello(): void {
    this.usersService.getList()
      .subscribe(
        messageModel => {
          console.log(messageModel.content);
          this.dataSource = messageModel.content;
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(id: number): void {
    this.usersService.delete(id).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);
    }, error => console.log(error));
  }
}

export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
}




