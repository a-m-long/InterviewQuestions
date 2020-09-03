import { Component, OnInit } from '@angular/core';
import {SqlService} from 'src/app/services/sql.service'

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  constructor(private svc: SqlService ) { }

  

  ngOnInit() {
    this.svc.getAllSQL();
  }

}
