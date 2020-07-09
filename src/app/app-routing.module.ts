import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewimageComponent } from './components/reviewimage/reviewimage.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'review', component: ReviewimageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
