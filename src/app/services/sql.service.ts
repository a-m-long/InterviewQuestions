import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  sqlData: JSON;

  constructor(private http: HttpClient) { }


  getAllSQL() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1.json'
    ).subscribe(data => {
      let java_data: any = this.sqlData = data as JSON;

    });
  }
}
