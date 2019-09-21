import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);

  }


  detailTaggle(event: any): void {
    if (event) {
      $('#detail-content').css('height', 'auto');
      $('#detail-content').css('-webkit-mask-image', '-webkit-linear-gradient(top, #ffff 100%, #ffff 100%, #0000 100%)');
      $('.readhide').show();
      $('.readmore').hide();
    } else {
      $('#detail-content').css('height', '250px');
      $('#detail-content').css('-webkit-mask-image', '-webkit-linear-gradient(top, #ffff 20%, #ffff 20%, #0000 90%)');
      $('.readhide').hide();
      $('.readmore').show();
    }

  }

  closeModal (): void {
    $('#player').attr('src', 'https://www.youtube.com/embed/2KAoS9fHGlY');
  }


}
