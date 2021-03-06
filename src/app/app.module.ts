import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/////// primeNG  package Import ///////////////
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {FileUploadModule} from 'primeng/fileupload';

/////////////  Component Import /////////////////////
import { TemplateComponent } from './template/template.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CoursesComponent } from './course/course-list/courses.component';
import { OrdersComponent } from './orders/orders.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { DashboradComponent } from './management/dashborad/dashborad.component';
import { CategoryComponent } from './management/category/category.component';
import { CourseComponent } from './management/course/course.component';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import { LessonComponent } from './management/lesson/lesson.component';
import { VideoComponent } from './management/video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    CourseDetailComponent,
    CoursesComponent,
    OrdersComponent,
    UserCourseComponent,
    UserManageComponent,
    DashboradComponent,
    CategoryComponent,
    CourseComponent,
    LessonComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    FieldsetModule,
    SidebarModule,
    StepsModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    EditorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
