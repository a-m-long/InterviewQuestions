import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JavaComponent } from './java/java.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SqlComponent } from './sql/sql.component'; // CLI imports router

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'java', component:JavaComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SqlComponent
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
