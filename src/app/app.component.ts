import {Component, OnInit} from '@angular/core';
import { Service } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'TestTaskAngular';
  data: any;
  name!: string;
  email!: string;
  id!: string;
  gender!: string;
  visible:boolean = false;

  constructor(protected service: Service) {
  }

  ngOnInit(): void {
    this.data = Object.entries(this.service.data)[Object.entries(this.service.data).length-1][1];
  }

  onClick(element:any) {
    this.visible = true;
    this.name = element.name;
    if (!element.email) {
      this.email = 'its unknown';
    } else {
      this.email = element.email;
    }
    this.id = element.id;
    if (!element.gender) {
      this.gender = 'its unknown';
    } else {
      this.gender = element.gender;
    }
  }

  onCloseClick() {
    this.visible = false;
  }
}
