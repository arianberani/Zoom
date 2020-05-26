import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomSService} from "../../../services/customS/custom-s.service";

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  data: any = [];
  serviceId: any;
  element: any = [];
  constructor(private route: ActivatedRoute, private customSService: CustomSService) { }

  ngOnInit() {
  this.getIdFromUrl();
  }

  getIdFromUrl(){
    this.data = this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.getService();
    });


  }

  getService(){
    this.customSService.getServiceById(this.serviceId).subscribe(res => {
      console.log((res));
      this.element = res;
    }, error=> {
      console.log(error)
    })
  }

}
