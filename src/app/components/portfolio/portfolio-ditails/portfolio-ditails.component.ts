import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomSService} from "../../../services/customS/custom-s.service";
import {PortfolioService} from "../../../services/portfolio/portfolio.service";


@Component({
  selector: 'app-portfolio-ditails',
  templateUrl: './portfolio-ditails.component.html',
  styleUrls: ['./portfolio-ditails.component.scss']
})
export class PortfolioDitailsComponent implements OnInit {
  data: any = [];
  portfolioId: any;
  element: any = [];

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.getIdFromUrl();
  }

  getIdFromUrl() {
    this.data = this.route.params.subscribe(params => {
      this.portfolioId = params['id'];
      this.getService();
    });
  }

  getService() {
    this.portfolioService.getServiceById(this.portfolioId).subscribe(res => {
      console.log((res));
      this.element = res;
    }, error => {
      console.log(error)
    })
  }
}
