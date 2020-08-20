import { Component, OnInit } from '@angular/core';
import {OWASPService} from'../services/owasp.service';

@Component({
  selector: 'app-owasp',
  templateUrl: './owasp.component.html',
  styleUrls: ['./owasp.component.css']
})
export class OWASPComponent implements OnInit {

  constructor(private svc: OWASPService) { }

  ngOnInit() {

    this.svc.getAllOWASP();
  }

}
