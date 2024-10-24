import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { MovieDashbordComponent } from './component/movie-dashbord/movie-dashbord.component';
import { MovieSliderComponent } from './component/movie-slider/movie-slider.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import{HttpClientModule}from'@angular/common/http';
import { OverviewComponent } from './component/overview/overview.component';
import { EmbedvideoComponent } from './component/embedvideo/embedvideo.component';
import { PhotoComponent } from './component/photo/photo.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieDashbordComponent,
    MovieSliderComponent,
    MovieDetailComponent,
    OverviewComponent,
    EmbedvideoComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
