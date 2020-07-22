import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  javaData: JSON;


  constructor(private http: HttpClient) { }

  getAllJava() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1').subscribe(data => {
      let java_data:any = this.javaData = data as JSON;

    })
  }


}