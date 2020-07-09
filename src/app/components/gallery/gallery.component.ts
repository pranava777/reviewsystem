import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { FlikrphotosService } from 'src/app/services/flikrphotos.service';
import { SharedataService } from 'src/app/services/sharedata.service';
import { Image } from 'src/app/models/image';

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

  page = 0;
  size = 30;

  constructor( 
    private router: Router,
    private flickrService: FlikrphotosService,
    private dataService: SharedataService,
  ) { }

  ngOnInit() {
    if(typeof(this.dataService.getImages()) != "undefined" )
      this.images = this.dataService.getImages();
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
    
    this.keyword = event.currentTarget[0].value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
        for (let i = 0; i < this.images.length; i++) {
          this.images[i].imageUrl ="";
          this.images[i].rating = "";
          this.images[i].name = "";
          this.images[i].reason ="";
        }
        
        this.dataService.setImages(this.images);
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

  onClickImage(event) {
    
    this.dataService.setImageData(event);
    this.router.navigate(['/review']);
  }

}
