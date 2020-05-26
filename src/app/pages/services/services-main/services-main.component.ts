import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../../services/homepage/homepage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services-main',
  templateUrl: './services-main.component.html',
  styleUrls: ['./services-main.component.scss']
})
export class ServicesMainComponent implements OnInit {

  services:any =  [];
  items: any = []

  constructor(private  homepageService: HomepageService, private router: Router) { }

  ngOnInit() {
    this.getAllServices();
    // @ts-ignore
    // this.goToServiceDetails();
  }

  getAllServices(){
    this.homepageService.getServices().subscribe( result => {
      console.log("results services", result);
      this.services = result;
    }, error => {
      console.log(error)
    })
  }

  goToServiceDetails(id){
    console.log(id)
    this.router.navigate(['/services/services-details/', id]);
  }

}
