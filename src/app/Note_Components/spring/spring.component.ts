import { Component, OnInit } from '@angular/core';
import {SpringService} from 'src/app/services/spring.service'

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {

  constructor(private svc: SpringService) { }

  ngOnInit() {
    this.svc.getAllSpring();

  }

}
