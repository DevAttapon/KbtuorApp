import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  file: any;
  progress: number;
  message: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit() {}
  uploadFile (files) {
       const formData = new FormData();
    if (files) {
      for (const file of files) {
        console.log('File : ', file);
        formData.append(file.name, file);
      }
    }

    const uploadReq = new HttpRequest('POST', 'https://localhost:8000/api/category', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
        console.log(this.progress);
      } else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();

      }
    });

  }

}
