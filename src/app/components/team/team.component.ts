import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../../constants/constants";
import {HomepageService} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team:any = [];
  constructor(private homepageService: HomepageService) {
  }
  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams(){
    this.homepageService.getTeams().subscribe( result => {
      console.log("results team", result);
      this.team = result;
    }, error => {
      console.log(error)
    })
  }
  // requestItems() {
  //   this.httpClient.get<any[]>(this.baseUrl+this.teamUrl).subscribe(team=> {this.team = team});
  // }
}
