import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {AboutSService} from "../../../services/aboutS/about-s.service";

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.scss']
})
export class AboutDetailsComponent implements OnInit {
  data: any = [];

  about: any;
  element: any = [];
  constructor(private route: ActivatedRoute, private aboutService: AboutSService) {
  }

  ngOnInit() {
    this.getIdFromUrl();
  }
  getIdFromUrl() {
    this.data = this.route.params.subscribe(params => {
      this.about = params['id'];
      this.getService();
    });
  }

  getService() {
    this.aboutService.getServiceById(this.about).subscribe(res => {
      console.log((res));
      this.element = res;
    }, error => {
      console.log(error)
    })
  }
}
