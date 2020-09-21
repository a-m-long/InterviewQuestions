import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { JavaComponent } from 'src/app/Note_Components/java/java.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SqlComponent } from 'src/app/Note_Components/sql/sql.component';
import { SpringComponent } from 'src/app/Note_Components/spring/spring.component';
import { KafkaComponent } from 'src/app/Note_Components/kafka/kafka.component';
import { SparkComponent } from 'src/app/Note_Components/spark/spark.component';
import { OWASPComponent } from 'src/app/Note_Components/owasp/owasp.component';
import { CybersecurityComponent } from 'src/app/Note_Components/cybersecurity/cybersecurity.component';
import { JspComponent } from 'src/app/Note_Components/jsp/jsp.component'; // CLI imports router
import {BlogComponent} from './blog/blog.component';
import {AboutComponent} from './about/about.component';
// import { AuthRoutingModule } from './auth-routing.module';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'java', component:JavaComponent},
  {path: 'sql', component:SqlComponent},
  {path: 'spring', component:SpringComponent},
  {path: 'kafka', component:KafkaComponent},
  {path: 'owasp', component:OWASPComponent},
  {path: 'cybersecurity', component:CybersecurityComponent},
]


// const firebaseConfig = {
//   apiKey: "AIzaSyD3EF4JUaHR4hB5mNwp0W2QQsEogQkz888",
//   authDomain: "blog-e5c21.firebaseapp.com",
//   databaseURL: "https://blog-e5c21.firebaseio.com",
//   projectId: "blog-e5c21",
//   storageBucket: "blog-e5c21.appspot.com",
//   messagingSenderId: "1056648336695",
 
// };

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SqlComponent,
    SpringComponent,
    KafkaComponent,
    SparkComponent,
    OWASPComponent,
    CybersecurityComponent,
    JspComponent,
    BlogComponent,
    AboutComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // FormsModule,
    // ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule,
    // AuthRoutingModule,

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
