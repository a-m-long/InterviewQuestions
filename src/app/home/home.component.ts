import { Component, OnInit } from '@angular/core';
import {SqlModel} from '../models/sqlmodel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sql_url: string;
  java_url:string;
  java : SqlModel;
  sql: SqlModel;
  full: SqlModel[];

  constructor() { }

  ngOnInit() {

    this.java.name = 'Java';
    this.java.picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlO3uerl5SbAjJijs7pOJukdZiZKqEz5Kbg&usqp=CAU';
    this.java.routing ='java';
    //////
    this.sql.name='SQL';
    this.sql.picture_url='https://.google.com/imgres?imgurl=https%3A%2F%2Fstackify.com%2Fwp-content%2Fuploads%2F2018%2F09%2FJava-Debugging-Tips-1280x720.jpg&imgrefurl=https%3A%2F%2Fstackify.com%2Fjava-debugging-tips%2F&tbnid=fUmYaCzLoutqAM&vet=12ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ..i&docid=dFSS8AtmIKzMbM&w=1280&h=720&q=java&authuser=2&ved=2ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ'
    this.sql.routing='sql';

    this.full.push(this.sql);
    this.full.push(this.java);
    console.log(this.full);

  }
}
