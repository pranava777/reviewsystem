import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { FlikrphotosService } from 'src/app/services/flikrphotos.service';
import { SharedataService } from 'src/app/services/sharedata.service';
import { Image } from 'src/app/models/image';
import { DisplayReviewComponent } from '../display-review/display-review.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [
    FlikrphotosService,
    SharedataService
  ]
})
export class GalleryComponent implements OnInit {

  images = [];
  keyword: string;
  image: Image=new Image();

  page = 0;
  size = 30;

  constructor( 
    private router: Router,
    private flickrService: FlikrphotosService,
    private dataService: SharedataService,
  ) { }

  ngOnInit() {
    
  }

  getData(obj) {
    let index=0,
    startingIndex=obj.pageIndex * obj.pageSize,
    endingIndex=startingIndex + obj.pageSize;

    this.images = this.images.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  search(event) {
    
    this.dataService.clearData();
    this.keyword = event.currentTarget[0].value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
        this.getData({pageIndex: this.page, pageSize: this.size});
      });
    }
  }

  onScroll() {

    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = this.images.concat(res);
      });
    }
  }

  onClickImage(event,title) {
    
    this.image.url = event + "_b.jpg";
    this.image.title = title;
    this.dataService.setImageData(this.image);
    this.router.navigate(['/review']);
  }

}
