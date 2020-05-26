import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from "../../constants/constants";
import {HomepageService} from "../../services/homepage/homepage.service";

@Component({
  selector: 'app-design-slider',
  templateUrl: './design-slider.component.html',
  styleUrls: ['./design-slider.component.scss']
})
export class DesignSliderComponent implements OnInit {
  categories: any = [];
  filter = '';
  showAll = false;
  baseUrl: string = Constants.base_url;
  slidesUrl: string  = Constants.slides;

  link = this.baseUrl + this.slidesUrl;
  constructor(private homepageService: HomepageService) {
    this.requestItems();
  }

  requestItems() {
    const queries: any = {};
    if (this.filter && this.filter !== '') {
      queries.name = this.filter;
    }
    if (!this.showAll) {
      queries._page = 0;
      queries._limit = 6;
    }
    Object.keys(queries).forEach((key, index) => {
      if (index === 0) {
        this.link = `${this.link}?${key}=${queries[key]}`;
      } else {
        this.link = `${this.link}&${key}=${queries[key]}`;
      }
    });

    this.getAllSlides();
    // this.httpClient.get<any[]>(this.link).subscribe(slides => {
    //   this.categories = slides;
    // });
  }


  ngOnInit() {
  }

  getAllSlides(){
    this.homepageService.getSlides().subscribe( result => {
      console.log("categories", result);
      this.categories = result
      // this.categories = result;
    }, error => {
      console.log(error)
    })

  }

  triggerMoreOrLess() {
    this.showAll = !this.showAll;
    this.requestItems();
  }

  onFilterClick(filter: string) {
    this.filter = filter;
    this.requestItems();
  }
}
