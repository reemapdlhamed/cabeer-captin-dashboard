import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptinComponent } from './components/captin/captin.component';
import { CaptinGateComponent } from './components/captin-gate/captin-gate.component';
import { RideDetailsComponent } from './components/ride-details/ride-details.component';
import { DisputeresolutionComponent } from './components/disputeresolution/disputeresolution.component';
@NgModule({
  declarations: [
    AppComponent,
    CaptinComponent,
    CaptinGateComponent,
    RideDetailsComponent,
    DisputeresolutionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
