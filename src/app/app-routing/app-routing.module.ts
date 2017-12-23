import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';


const appRoutes: Routes = [
  // { path: 'login', component: LoginPageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'token/:id', component: DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
