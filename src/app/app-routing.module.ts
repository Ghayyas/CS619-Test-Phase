import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { OwnersDashboardComponent } from "./pages/owners-dashboard/owners-dashboard.component";



const routes: Routes = [
  { path: '', redirectTo: '/signup',pathMatch: 'full'},
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard/:id', component: OwnersDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
