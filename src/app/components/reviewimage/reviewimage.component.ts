import { Component, OnInit, Input } from '@angular/core';
import { SharedataService } from 'src/app/services/sharedata.service';
import { Router } from "@angular/router";
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-reviewimage',
  templateUrl: './reviewimage.component.html',
  styleUrls: ['./reviewimage.component.css'],
  providers: [
    SharedataService
  ]
})
export class ReviewimageComponent implements OnInit {

  imageToBeReviewed: Image=new Image();

  constructor(
    private dataService: SharedataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageToBeReviewed.imageUrl = this.dataService.getImageData().imageUrl;
    this.imageToBeReviewed.title = this.dataService.getImageData().title;
  }

  submitReview(event) {

    this.dataService.setUserReviewData(this.imageToBeReviewed.rating,this.imageToBeReviewed.reason,this.imageToBeReviewed.name);
    this.router.navigate(['/gallery']);
  }

}
