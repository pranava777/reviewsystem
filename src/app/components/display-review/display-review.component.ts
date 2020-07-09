import { Component, OnInit, Input } from '@angular/core';

import { SharedataService } from 'src/app/services/sharedata.service';
import { User } from 'src/app/models/user';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-display-review',
  templateUrl: './display-review.component.html',
  styleUrls: ['./display-review.component.css'],
  providers: [
    SharedataService
  ]
})
export class DisplayReviewComponent implements OnInit {

  userData: User=new User();
  imageData: Image=new Image();

  constructor(
    private dataShared: SharedataService
  ) { }

  ngOnInit(): void {
    this.userData = this.dataShared.getUserReviewData();
    this.imageData = this.dataShared.getImageData();
  }

}
