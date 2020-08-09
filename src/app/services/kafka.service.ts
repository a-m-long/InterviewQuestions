import { Injectable } from '@angular/core';
import { HttpDownloadProgressEvent, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KafkaService {

  kafkaData: JSON;
  question: string;
  answer: string;
  id: string;

  constructor(private http: HttpClient) { }

  getAllKafka() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/1ehwLfTSExsC-kgy5DBtTG6OEL59rMCmRcUM47364uq4/Sheet1.json'
    ).subscribe(data => {
      let kafka_data: any = this.kafkaData = data as JSON;

      let max = kafka_data[0]

      for (let i = 0; i < kafka_data.length; i++) {

        let btn2 = document.getElementById("next");
        btn2.addEventListener("click", nextQuestion);
        let btn3 = document.getElementById("back");
        btn3.addEventListener("click", lastQuestion);
        


        let x = 1;
        let individual = kafka_data[x];

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
          individual = kafka_data[x];
          document.getElementById("answer").hidden = true;

          if (x > kafka_data.length-2){
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
          document.getElementById("answer").hidden = true;
          if(x < 1){
            /*
            comment will pop up here add event listener for a message to pop up
            */

            let max = kafka_data.length -1; 
            x=max;
            console.log(x);
        
          }
          console.log(x);
          individual = kafka_data[x];

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
