import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { imovie, itrailer } from 'src/app/shared/model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
movieId!:string;
movieObject!:imovie
movietrailer:Array<itrailer>=[]
  constructor(private _route :ActivatedRoute,
    private _movieservice :MovieService
  ) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((myparam:Params) => {
      this.movieId=myparam['movieid']
      if(this.movieId){
this._movieservice.getmoviedetail(this.movieId)
.subscribe(res => {
  // console.log(res)
  this.movieObject=res
})
this._movieservice.gettrailervideo(this.movieId)
.subscribe(trailer => {
  console.log(trailer)
  this.movietrailer=trailer
})


      }
    })
  }

}
