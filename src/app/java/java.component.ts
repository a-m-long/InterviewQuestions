import { Component, OnInit } from '@angular/core';
import {JavaService} from '../java.service'
  import { from } from 'rxjs';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private svc: JavaService) { }

  ngOnInit() {
    this.svc.getAllJava();
  }

}



