import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/_services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  visibleSidebar2: any;
  courseList: any;
  constructor(
    private _service: AppService
  ) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this._service.getData('/category').subscribe((res: any) => {
          this.courseList = res.data;
    });
  }

}
