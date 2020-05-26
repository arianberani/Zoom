import { Component, OnInit } from '@angular/core';
import {HomepageService} from "../../../services/homepage/homepage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent implements OnInit {
  items: any = []
  about: any = [];
  constructor(private  homepageService: HomepageService, private router: Router) { }

  ngOnInit() {
    this.getAllAbout();

  }
  getAllAbout(){
    this.homepageService.getAbout().subscribe( result => {
      console.log("results about", result);
      this.about = result;
    }, error => {
      console.log(error)
    })
  }
  goToAboutDetails(id){
    console.log(id)
    this.router.navigate(['/about/about-details/', id]);
  }


}
