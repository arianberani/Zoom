import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  service:any =[];
  constructor(private homepageService: HomepageService) {
  }
  ngOnInit() {
    this.getAllService();
  }
  getAllService(){
    this.homepageService.getService().subscribe( result => {
      console.log("results service", result);
      this.service = result;
    }, error => {
      console.log(error)
    })
  }

}
