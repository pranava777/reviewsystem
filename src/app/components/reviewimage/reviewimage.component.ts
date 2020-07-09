import { Component, OnInit, Input } from '@angular/core';
import { SharedataService } from 'src/app/services/sharedata.service';
import { User } from 'src/app/models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reviewimage',
  templateUrl: './reviewimage.component.html',
  styleUrls: ['./reviewimage.component.css'],
  providers: [
    SharedataService
  ]
})
export class ReviewimageComponent implements OnInit {

  imageUrl: string;
  title: string;
  user: User=new User();
  rating : string="";

  constructor(
    private dataService: SharedataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageUrl = this.dataService.getImageData().url;
    this.title = this.dataService.getImageData().title;
  }

  submitReview(event) {

    this.dataService.setUserReviewData(this.user,this.rating);
    this.router.navigate(['/gallery']);
  }

}
