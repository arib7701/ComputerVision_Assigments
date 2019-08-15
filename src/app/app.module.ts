import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PyramidsComponent } from './components/pyramids/pyramids.component';
import { CircleComponent } from './components/circle/circle.component';
import { SegmentationComponent } from './components/segmentation/segmentation.component';
import { CocoaComponent } from './components/cocoa/cocoa.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: PyramidsComponent },
  { path: 'assignment2', component: CircleComponent },
  { path: 'assignment3', component: SegmentationComponent },
  { path: 'assignment4', component: CocoaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PyramidsComponent,
    CircleComponent,
    SegmentationComponent,
    CocoaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
