import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDashbordComponent } from './component/movie-dashbord/movie-dashbord.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path:'', component:MovieDashbordComponent
  },
  {
    path:'moviedetail/:movieid', component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
