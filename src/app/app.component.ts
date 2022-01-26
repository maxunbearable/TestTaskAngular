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
  visible:boolean = false;
  elemKeys!: any[];
  elemValues!: any[];

  constructor(protected service: Service) {
  }

  ngOnInit(): void {
    this.data = Object.entries(this.service.data)[Object.entries(this.service.data).length-1][1];
  }

  onClick(element:any) {
    this.visible = true;
    this.elemKeys = Object.keys(element);
    this.elemValues = Object.values(element).map(el => el !== null? el : 'it\'s unknown');
  }

  onCloseClick() {
    this.visible = false;
  }
}
