import { Component, OnInit } from '@angular/core';
import {OWASPService} from'src/app/services/owasp.service';

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
