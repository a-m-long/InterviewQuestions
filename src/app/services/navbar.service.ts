import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  theNavbarStuff(){

    window.onscroll = function(){
     
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        document.getElementById("navbar").style.padding="30px 5px";
        document.getElementById("logo").style.fontSize="25px";
        document.getElementById("navbar").style.backgroundColor = "whitesmoke";

      }else {
          document.getElementById("navbar").style.padding = "50px 5px";
          document.getElementById("navbar").style.backgroundColor = "transparent";
          document.getElementById("logo").style.fontSize = "35px";
        }
    }
  }
}
