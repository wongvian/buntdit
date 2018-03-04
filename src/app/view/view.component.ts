import { Component, OnInit, OnDestroy } from '@angular/core';
import { PunditserviceService } from '../share/punditservice.service';
import {
  ParamMap,
  Router,
  ActivatedRoute,
  RoutesRecognized
} from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
  isLoading = false;
  private sub: any = null;
  param: any;
  stddata: any;
  partdate: string;
  postrime: string;
  stdid: string;
  perfix: string;
  fullname: string;
  numrow: string;
  numreal: string;
  build: string;
  constructor(private punditservice: PunditserviceService, private route: ActivatedRoute,
    private router: Router) { this.param = this.route.snapshot.params.id; }


  ngOnInit() {
    this.isLoading = true;
    console.log(this.param);
    this.sub = this.punditservice.getstd(this.param).subscribe(
      data => {
        this.stddata = data[0];
        this.stdid = this.stddata.STUDENT_ID;
        this.partdate = this.stddata.PART_DATE;
        this.postrime = this.stddata.POST_TIME;
        this.perfix = this.stddata.PNAME;
        this.fullname = this.stddata.FULLNAME;
        this.numrow = this.stddata.NUMROW;
        this.numreal = this.stddata.NUMREAL;
        this.build = this.stddata.BUILD;

        console.log(this.stddata.FULLNAME);
      },
      err => {
        console.log(err);
        //window.location.href = 'https://bundit.snru.ac.th'
        this.router.navigate(['']);
      }, () => this.isLoading = false
    );
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
