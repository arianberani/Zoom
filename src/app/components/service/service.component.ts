import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  services:any = [];
  constructor(private homepageService: HomepageService) {
  }
  ngOnInit() {
    this.getAllServices();
  }
    getAllServices(){
      this.homepageService.getServices().subscribe( result => {
        console.log("results services", result);
        this.services = result;
      }, error => {
        console.log(error)
      })
    }

}
