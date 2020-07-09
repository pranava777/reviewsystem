import { Injectable } from '@angular/core';
import { Image } from 'src/app/models/image';

@Injectable()
export class SharedataService {

  static items: Array<Image>;
  static imageToReview: Image=new Image();

  constructor() { }

  setImages(images) {
    SharedataService.items = images;
  }

  setImageData(event) {

    for (let i = 0; i < SharedataService.items.length; i++) {
      if(SharedataService.items[i].url == event) {
        SharedataService.items[i].imageUrl = event + "_b.jpg";
        SharedataService.imageToReview = SharedataService.items[i]; 
      }
    }
  }

  getImageData() : Image {

    return SharedataService.imageToReview;
  }

  
  setUserReviewData(rating,reason,name) {

    for (let i = 0; i < SharedataService.items.length; i++) {
      if(SharedataService.items[i].url == SharedataService.imageToReview.url) {
        SharedataService.imageToReview.rating = "Rating : " + rating;
        SharedataService.imageToReview.name = " By : " + name;
        SharedataService.imageToReview.reason = "Reason : " + reason;
        SharedataService.items[i] = SharedataService.imageToReview;
      }
    }
    
    
  }

  
  getImages() : Array<Image> {
    
    return SharedataService.items;
  }

}
