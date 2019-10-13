import { DashboradComponent } from './management/dashborad/dashborad.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserCourseComponent } from './user-course/user-course.component';
import { CoursesComponent } from './course/course-list/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { UserManageComponent } from './user-manage/user-manage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'courses-view',
    component: CourseDetailComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'mycourses',
    component: UserCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: UserManageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashborad',
    component: DashboradComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
