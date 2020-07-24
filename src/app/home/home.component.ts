import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sql_url: string;
  java_url:string;

  constructor() { }

  ngOnInit() {


  }

}
