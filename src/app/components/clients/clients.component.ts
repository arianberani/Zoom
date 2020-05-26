import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HomepageService} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients:any = [];
  constructor(private homepageService: HomepageService) {
  }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients(){
    this.homepageService.getClients().subscribe( result => {
      console.log("results clients", result);
      this.clients = result;
    }, error => {
      console.log(error)
    })
  }
  // requestItems() {
  //   const link  = 'http://localhost:3000/clients';
  //   this.httpClient.get<any[]>(link).subscribe(clients=> {this.clients = clients});
  // }
}
