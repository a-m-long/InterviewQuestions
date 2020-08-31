import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SqlComponent } from './sql/sql.component';
import { SpringComponent } from './spring/spring.component';
import { KafkaComponent } from './kafka/kafka.component';
import { SparkComponent } from './spark/spark.component';
import { OWASPComponent } from './owasp/owasp.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { JspComponent } from './jsp/jsp.component'; // CLI imports router

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'java', component:JavaComponent},
  {path: 'sql', component:SqlComponent},
  {path: 'spring', component:SpringComponent},
  {path: 'kafka', component:KafkaComponent},
  {path: 'owasp', component:OWASPComponent},
  {path: 'cybersecurity', component:CybersecurityComponent},

]

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
    JspComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
