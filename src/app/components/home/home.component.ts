import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../sevices/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getHello();
  }

  getHello(): void {
    this.homeService.helloText()
      .subscribe(
        messageModel => {
          this.message = messageModel.message;
        },
        error => {
          console.log(error);
        });
  }


}
