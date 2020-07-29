import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  javaData: JSON;
  answer: string;
  question: string;
  id: string;


  constructor(private http: HttpClient) { }

  getAllJava() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1.json'
    ).subscribe(data => {
      let java_data: any = this.javaData = data as JSON;

      let max = java_data[0]

      for (let i = 0; i < java_data.length; i++) {

        let btn2 = document.getElementById("next");
        btn2.addEventListener("click", nextQuestion);
        let btn3 = document.getElementById("back");
        btn3.addEventListener("click", lastQuestion);
        


        let x = 1;
        let individual = java_data[x];

        for (let item in individual) {
          //Questions
          if (item == "Question") {
            this.question = individual[item];
            document.getElementById("question").innerHTML = this.question;
          }
          //filtering answers
          if (item == "Answer") {

            let btn = document.getElementById("show");
            btn.addEventListener("click", showAnswer);

            function showAnswer() {
              this.answer = (individual[item]);
              document.getElementById("answer").innerHTML = this.answer;

            }

          }
          //to show the number in the list on the frontend
          if (item == "id") {
            this.id = individual[item];
            document.getElementById("id").innerHTML = this.id;

          }
        }

        function nextQuestion() {
          x++;
          individual = java_data[x];
          document.getElementById("answer").hidden = true;

          if (x > java_data.length-2){
            x = 0;
          }

          for (let item in individual) {
            //Questions
            if (item == "Question") {
              this.question = individual[item];
              document.getElementById("question").innerHTML = this.question;
            }
            //filtering answers
            if (item == "Answer") {

              let btn = document.getElementById("show");
              btn.addEventListener("click", showAnswer);

              function showAnswer() {
                this.answer = (individual[item]);
                document.getElementById("answer").hidden = false;
                document.getElementById("answer").innerHTML = this.answer;
              }
            }
            //to show the number in the list on the frontend
            if (item == "id") {
              this.id = individual[item];
              document.getElementById("id").innerHTML = this.id;

            }
          }

        }

        function lastQuestion() {
          --x;
          if(x < 1){
            /*
            comment will pop up here add event listener for a message to pop up
            */

            let max = java_data.length -1; 
            x=max;
            console.log(x);
        
          }
          console.log(x);
          individual = java_data[x];

          for (let item in individual) {
            //Questions
            if (item == "Question") {
              this.question = individual[item];
              document.getElementById("question").innerHTML = this.question;
            }
            //filtering answers
            if (item == "Answer") {

              let btn = document.getElementById("show");
              btn.addEventListener("click", showAnswer);

              function showAnswer() {
                this.answer = (individual[item]);
                console.log(this.answer);
                document.getElementById("answer").innerHTML = this.answer;
              }
            }

            //to show the number in the list on the frontend
            if (item == "id") {
              this.id = individual[item];
              document.getElementById("id").innerHTML = this.id;

            }
          }


        }


      }



    })
  }


}