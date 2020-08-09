import { Component, OnInit } from '@angular/core';
import {KafkaService} from '../services/kafka.service';

@Component({
  selector: 'app-kafka',
  templateUrl: './kafka.component.html',
  styleUrls: ['./kafka.component.css']
})
export class KafkaComponent implements OnInit {

  constructor(private svc: KafkaService) { }




  ngOnInit() {

    this.svc.getAllKafka();

  }

}
