import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { JspComponent } from 'src/app/Note_Components/jsp/jsp.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component'; // CLI imports router

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
    JspComponent,
    BlogComponent,
    AboutComponent
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
