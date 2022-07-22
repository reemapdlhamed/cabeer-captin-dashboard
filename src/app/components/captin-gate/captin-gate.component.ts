import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RateService } from 'src/app/services/rate.service';
import { WorkingHoursService } from 'src/app/services/working-hours.service';
import { SequenceService } from 'src/app/services/sequence.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-captin-gate',
  templateUrl: './captin-gate.component.html',
  styleUrls: ['./captin-gate.component.css'],
})
export class CaptinGateComponent implements OnInit {
  bearerToken: any;
  rate: any;
  workingHours: any;
  sequences: any;
  trip: any;
  id: any;
  constructor(
    public TokenService: TokenService,
    public router: Router,
    private RateService: RateService,
    private WorkingHoursService: WorkingHoursService,
    private SequenceService: SequenceService,
    private TripService: TripService,
    private route: ActivatedRoute
  ) {
    this.RateService.getRate().subscribe((result) => {
      console.log('rate', result);

      this.rate = result;
    });
    this.WorkingHoursService.getWorkingHours().subscribe((res) => {
      console.log('hours', res);
      this.workingHours = res;
    });
    this.SequenceService.getSequence().subscribe((res) => {
      this.id = this.sequences[0].data.id;
      console.log('id', this.id);
      console.log('sequences', res);

      this.sequences = res;
    });
    // this.id = this.route.snapshot.paramMap.get('tripId');
    this.TripService.getTripById(this.id).subscribe((res) => {
      console.log('Trip', res);
      this.trip = res;
    });
  }

  ngOnInit(): void {
    this.TokenService.getToken().subscribe((res) => {
      this.bearerToken = res;
      console.log(res);
      localStorage.setItem('Token', this.bearerToken?.data);
      console.log('local', localStorage.getItem('Token'));
      // this.bearerToken = this.route.snapshot.paramMap.get('bearerToken');
      // this.router.navigateByUrl(`captingate:/bearerToken`);
    });
  }
}
