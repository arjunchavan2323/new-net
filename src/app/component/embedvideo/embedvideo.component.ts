import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embedvideo',
  templateUrl: './embedvideo.component.html',
  styleUrls: ['./embedvideo.component.scss']
})
export class EmbedvideoComponent implements OnInit {
@Input()key!:string;
Trailerurl!:SafeResourceUrl
  constructor(private _safesantizer :DomSanitizer) { }

  ngOnInit(): void {
    if(this.key){
      const url=`https://www.youtube.com/embed/${this.key}`
      this.Trailerurl=this._safesantizer.bypassSecurityTrustResourceUrl(url)
    }
  }

}
