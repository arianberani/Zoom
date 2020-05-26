import { Injectable } from '@angular/core';
import {RequestService} from "../request/request.service";
import {Constants} from "../../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  teamUrl: string = Constants.team;
  slidesUrl: string = Constants.slides;
  clientsUrl: string =Constants.clients;
  servicesUrl: string =Constants.services;
  portfolioUrl: string =Constants.portfolio;
  serviceUrl: string =Constants.service;
  aboutUrl: string =Constants.about;
  options = {}
  constructor(private requestService: RequestService) { }

  getTeams(){
    return this.requestService.getRequest(this.teamUrl, this.options)
  }

  getSlides(){
    return this.requestService.getRequest(this.slidesUrl, this.options)
  }
  getClients(){
    return this.requestService.getRequest(this.clientsUrl, this.options)
  }
  getServices(){
    return this.requestService.getRequest(this.servicesUrl, this.options)
  }
  getService(){
    return this.requestService.getRequest(this.serviceUrl, this.options)
  }
  getPortfolio(){
    return this.requestService.getRequest(this.portfolioUrl, this.options)
  }
  getAbout(){
    return this.requestService.getRequest(this.aboutUrl, this.options)
  }

}
