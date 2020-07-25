import { Component, OnInit } from '@angular/core';
import {SqlModel} from '../models/sqlmodel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor() {
    
   }

  ngOnInit() {

    let java: SqlModel;
    let sql: SqlModel;
    let full: SqlModel[]=[];


    java.name = 'Java';
    java.picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlO3uerl5SbAjJijs7pOJukdZiZKqEz5Kbg&usqp=CAU';
    java.routing ='java';

    //////
    sql.name='SQL';
    sql.picture_url='https://.google.com/imgres?imgurl=https%3A%2F%2Fstackify.com%2Fwp-content%2Fuploads%2F2018%2F09%2FJava-Debugging-Tips-1280x720.jpg&imgrefurl=https%3A%2F%2Fstackify.com%2Fjava-debugging-tips%2F&tbnid=fUmYaCzLoutqAM&vet=12ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ..i&docid=dFSS8AtmIKzMbM&w=1280&h=720&q=java&authuser=2&ved=2ahUKEwjApqa5iOfqAhWGe60KHQoJBpEQMygDegUIARDYAQ'
    sql.routing='sql';

    full.push(sql);
    full.push(java);
    console.log(full);
    console.log(java.name);

  }
}
