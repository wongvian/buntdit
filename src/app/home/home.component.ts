import { Component, OnInit, OnDestroy } from '@angular/core';
import { PunditserviceService } from '../share/punditservice.service';


import * as _ from 'underscore';
import { PagerService } from '../PagerService';
import { RequestOptions, Headers, ResponseType } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  mytxt: string;
  searchText: string;
  private sub: any;

  isLoading = false;

  title = 'Simple Datatable Example using Angular 4';
  public data: Object;
  public temp_var: Object = false;
  constructor(private punditservice: PunditserviceService,  private pagerService: PagerService) { }


  // array of all items to be paged
  allkeep: any;
  private allItems: any;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  ngOnInit() {

    this.getall();
  }

  setPage(page: number) {
    /*if (page < 1 || page > this.pager.totalPages) {
        return;
    }*/

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onkey(findx: any) {
    console.log(findx);
    if (findx.target.value !== '' && findx.target.value !== null) {
      this.mytxt = findx.target.value;
      console.log(this.mytxt);
      /*this.sub = this.http.get('http://192.168.201.165:8001/api/find/' + findx.target.value).subscribe((res: Response) => {
        this.allItems = res;
        this.setPage(1);
        console.log(this.allItems);
        });*/
        this.allItems = this.allkeep;
        this.allItems = this.allItems.filter(s => s.STUDENT_ID.includes(this.mytxt) || s.FULLNAME.includes(this.mytxt) );
        this.setPage(1);
    } else {
      console.log('getall');
      this.getallx();
    }
  }

  onkeyx(findx: any) {
    console.log(findx);
    if (findx !== '' && findx !== null) {
      this.mytxt = findx;
      /*this.sub = this.http.get('http://192.168.201.165:8001/api/find/' + findx.target.value).subscribe((res: Response) => {
        this.allItems = res;
        this.setPage(1);
        console.log(this.allItems);
        });*/
        this.allItems = this.allkeep;
        this.allItems = this.allItems.filter(s => s.STUDENT_ID.includes(this.mytxt) || s.FULLNAME.includes(this.mytxt) );
        this.setPage(1);
    } else {
      console.log('getall');
      this.getallx();
    }
  }

  getall() {
    this.isLoading = true;
    this.sub = this.punditservice.getsongall().subscribe(
      (res) => {
        this.allkeep = res;
        this.allItems = this.allkeep;
        this.setPage(1);
      }, (err) => console.log(err),
      () => this.isLoading = false
    );
  }
  getallx() {
      console.log('keep');
      console.log(this.allkeep);
      this.allItems = this.allkeep;
      this.setPage(1);
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

}
