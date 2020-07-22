import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  javaData: JSON;
  answer: String[]; 
  question: String[]; 
  id: number[];


  constructor(private http: HttpClient) { }

  getAllJava() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1.json'
    ).subscribe(data => {
      let java_data:any = this.javaData = data as JSON;

      for (let i in java_data){
        let individual = java_data[i];
        for (let item in individual){
          //Questions
          if(item=="Question"){
            this.question.push(individual[item]);
          }
          //filtering answers
          if (item =="Answer"){
            this.answer.push(individual[item])
            console.log(individual[item]);
          }
          //to show the number in the list on the frontend
          if(item =="id"){
            this.id.push(individual[item]);
          }
        }
      }

      

    })
  }


}