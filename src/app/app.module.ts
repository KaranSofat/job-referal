import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { ErrorComponent } from './error/error.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidateResumeComponent } from './candidate-resume/candidate-resume.component';
import { HeaderComponent } from './header/header.component';
import { ListReferalsComponent } from './list-referals/list-referals.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const appRoutes: Routes = [
  {
    path: 'comingsoon',
    component: ComingsoonComponent,
  }, {
    path: '',
    component: HomeComponent,
  },{
    path: 'jobList',
    component: JobListComponent,
  },{
    path: 'jobDetails',
    component: JobDetailComponent,
  },{
    path: 'candidates',
    component: CandidateListComponent,
  },{
    path: 'candidateDetails',
    component: CandidateDetailComponent,
  },{
    path: 'candidateDashboard',
    component: CandidateDashboardComponent,
  },{
    path: 'candidateResume',
    component: CandidateResumeComponent,
  },{
    path: 'listRefers',
    component: ListReferalsComponent,
  },
  {
    path: 'listCompanies',
    component: CompaniesListComponent,
  },
   {
    path: 'companyDetails',
    component: CompanyDetailComponent,
  },



  {
    path: '**',
    component: ErrorComponent,
  },
   
];
@NgModule({
  declarations: [
    AppComponent,
    ComingsoonComponent,
    HomeComponent,
    JobListComponent,
    JobDetailComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    ErrorComponent,
    CandidateDashboardComponent,
    CandidateResumeComponent,
    HeaderComponent,
    ListReferalsComponent,
    CompaniesListComponent,
    CompanyDetailComponent
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
