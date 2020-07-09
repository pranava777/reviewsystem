import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/image';
import { User } from 'src/app/models/user';

@Injectable()
export class SharedataService {

  static imagereceived: Image=new Image();
  static userReview: User=new User();
  static rating : string="";

  constructor() { }

  setImageData(image) {

    SharedataService.imagereceived.url = image.url;
    SharedataService.imagereceived.title = image.title;
  }

  getImageData() : Image {

    return SharedataService.imagereceived;
  }

  setUserReviewData(user,rating) {

    SharedataService.userReview.rating = "Rating : " + rating;
    SharedataService.userReview.name = "Rated by : " + user.name;
    SharedataService.userReview.reason = "Reason : " + user.reason;
  }

  getUserReviewData() : User {

    return SharedataService.userReview;
  }

  clearData() {
    SharedataService.imagereceived.title = "";
    SharedataService.imagereceived.url = "";
    SharedataService.userReview.name = "";
    SharedataService.userReview.reason = "";
    SharedataService.userReview.rating = "";
  }
  
}
