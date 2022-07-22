import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptinComponent } from './components/captin/captin.component';
import { CaptinGateComponent } from './components/captin-gate/captin-gate.component';
import { RideDetailsComponent } from './components/ride-details/ride-details.component';
import { DisputeresolutionComponent } from './components/disputeresolution/disputeresolution.component';
const routes: Routes = [
  { path: '', redirectTo: 'captingate', pathMatch: 'full' },
  {
    path: 'captingate',
    component: CaptinGateComponent,
  },
  { path: 'captingate', component: CaptinGateComponent },
  { path: 'ridedetails', component: RideDetailsComponent },
  { path: 'disres', component: DisputeresolutionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
