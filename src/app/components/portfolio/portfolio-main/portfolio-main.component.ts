import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../../services/homepage/homepage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.scss']
})
export class PortfolioMainComponent implements OnInit {
  items: any = []
  portfolio: any = [];
  constructor(private  homepageService: HomepageService, private router: Router) { }

  ngOnInit() {
    this.getAllPortfolio();
    // @ts-ignore
    // this.goToServiceDetails();
  }
  getAllPortfolio(){
    this.homepageService.getPortfolio().subscribe( result => {
      console.log("results portfolio", result);
      this.portfolio = result;
    }, error => {
      console.log(error)
    })
  }
  goToPortfolioDitails(id){
    console.log(id)
    this.router.navigate(['/portfolio/portfolio-ditails/', id]);
  }


}
