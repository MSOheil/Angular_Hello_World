import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesOneComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CouresService } from './course/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CouresService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
