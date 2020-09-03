import { Component, OnInit } from '@angular/core';
import { CybersecurityService } from 'src/app/services/cybersecurity.service';

@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent implements OnInit {

  constructor(private svc: CybersecurityService) { }

  ngOnInit(){

    this.svc.getAllCyberSecurity();
  }

}
