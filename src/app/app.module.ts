import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ComingsoonComponent,
  },
   
];
@NgModule({
  declarations: [
    AppComponent,
    ComingsoonComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
