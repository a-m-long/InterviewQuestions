import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  constructor(private http: HttpClient) { }

  getAllJava() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1').subscribe(data => {

    })
  }


}