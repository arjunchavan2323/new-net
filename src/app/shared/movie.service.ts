import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { imovie, imovieresponse, itrailer, itrailerresponse } from './model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
baseurl:string=environment.baseurl;
apikey:string=environment.apikey;
  constructor(private _http :HttpClient) { }


  getalltrndingmovie():Observable<imovie[]>{
    let trendingurl=`${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    return this._http.get<imovieresponse>(trendingurl)
    .pipe(
      map(res => (res.results))
    )
  }

  getmoviedetail(id:string):Observable<imovie>{
    let moviedetailurl=`${this.baseurl}/movie/${id}?api_key=${this.apikey}`
    return this._http.get<imovie>(moviedetailurl)
  }


  gettrailervideo(id:string):Observable<itrailer[]>{
    let videourl=`${this.baseurl}/movie/${id}/videos?api_key=${this.apikey}`
    return this._http.get<itrailerresponse>(videourl)
    .pipe(
      map(res => (res.results))
    )
  }
}
