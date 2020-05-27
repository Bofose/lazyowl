import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { AnalysisPredectionComponent } from './pages/analysis-predection/analysis-predection.component';
import { InterviewPrepComponent } from './pages/interview-prep/interview-prep.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NotesComponent } from './pages/academics/notes/notes.component';
import { QuestionpaperComponent } from './pages/academics/questionpaper/questionpaper.component';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './pages/analysis-predection/analysis/analysis.component';

const appRoutes: Routes=[
  {path: '', component: IndexComponent},
  {path: 'home', component: IndexComponent},
  {path: 'academics', component: AcademicsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'questionpaper', component: QuestionpaperComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'anp', component: AnalysisPredectionComponent},
  {path:'interviewprep',component: InterviewPrepComponent}, 
  {path:'analysis',component: AnalysisComponent}, 
  {path: 'contactus',component: ContactusComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AcademicsComponent,
    AnalysisPredectionComponent,
    InterviewPrepComponent,
    AboutusComponent,
    ContactusComponent,
    NotesComponent,
    QuestionpaperComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
