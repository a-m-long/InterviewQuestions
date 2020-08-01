import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpringService {

  springData: JSON;
  answer: string;
  question: string;
  id: string;

  constructor(private http: HttpClient) { }

  getAllSpring() {
    this.http.get('https://flashcards-23d9f.firebaseio.com/19-s8pTQdyz9CmSkpFlWvR15Kquw988LvPsdr51_C0Vk/Sheet1.json'
    ).subscribe(data => {
      let spring_data: any = this.springData = data as JSON;

      for (let i = 0; i < spring_data.length; i++) {

        let btn2 = document.getElementById("next");
        btn2.addEventListener("click", nextQuestion);
        let btn3 = document.getElementById("back");
        btn3.addEventListener("click", lastQuestion);


        let x = 1;
        let individual = spring_data[x];

        for (let item in individual) {
          //Questions
          if (item == "question") {
            this.question = individual[item];
            document.getElementById("question").innerHTML = this.question;
          }
          //filtering answers
          if (item == "answer") {

            let btn = document.getElementById("show");
            btn.addEventListener("click", showAnswer);
         
          

            function showAnswer() {
              this.answer = (individual[item]);
              document.getElementById("answer").innerHTML = this.answer;
              console.log(this.answer);

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
          individual = spring_data[x];
          document.getElementById("answer").hidden = true;

          if (x > (spring_data.length-2)){
            x = 0;
          }

          for (let item in individual) {
            //Questions
            if (item == "question") {
              this.question = individual[item];
              document.getElementById("question").innerHTML = this.question;
            }
            //filtering answers
            if (item == "answer") {

              let btn = document.getElementById("show");
              btn.addEventListener("click", showAnswer);

              function showAnswer() {
                this.answer = (individual[item]);
                document.getElementById("answer").hidden = false;
                document.getElementById("answer").innerHTML = this.answer;
                console.log(this.answer);
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
            let max = spring_data.length -1; 
            x=max;
            console.log(x);
          }
          console.log(x);
          individual = spring_data[x];

          for (let item in individual) {
            //Questions
            if (item == "question") {
              this.question = individual[item];
              document.getElementById("question").innerHTML = this.question;
            }
            //filtering answers
            if (item == "answer") {

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

