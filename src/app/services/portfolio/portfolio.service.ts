import { Injectable } from '@angular/core';
import {Constants} from "../../constants/constants";
import {RequestService} from "../request/request.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  baseUrl: string = Constants.base_url;
  portfolioUrl: string = Constants.portfolio;
  constructor(private customS: PortfolioService, private requestService: RequestService, private http: HttpClient) { }

  getServiceById(id){
    return this.getRequest(this.portfolioUrl, id);
  }

  getRequest(endPoint, id) {
    return this.http.get(this.baseUrl + endPoint+"/"+id, id);
  }

}

