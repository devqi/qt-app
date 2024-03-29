import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
    // children: [
    //   {path: 'home', component: HomeComponent}
    // ]
  },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
